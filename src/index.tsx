import React from 'react';
import useSWR from 'swr';
import { SpotifySongConfigContext } from './lib/context/spotify-song-config';
import { fetchCurrentSpotifySong, fetchRecentlyPlayedSpotifySong } from './lib/fetch';
import { useSpotifyConfig } from './lib/hooks/use-spotify-song-config';
import { parseCurrentSpotifySong, parseRecentSpotifySong } from './lib/parsers';
import type { UseSpotifySong, SpotifySongContext } from './types';
import type { CurrentlyPlaying, RecentlyPlayedItem } from './types/spotify-api';

const fetcher = async (
  accessToken: string,
): Promise<CurrentlyPlaying | RecentlyPlayedItem | undefined> =>
  fetchCurrentSpotifySong(accessToken).then(async (currentRes) => {
    if (currentRes) return currentRes;

    const recentRes = await fetchRecentlyPlayedSpotifySong(accessToken);

    return recentRes;
  });

/**
 * Grab a currently playing Spotify song or the most recently played song
 *
 * @return   {UseSpotifySong}
 *           A Spotify song
 *
 * @example
 *   const Example = () => {
 *     const { song, isLoading } = useSpotifySong();
 *
 *     return <p>{isLoading ? 'Loading...' : song?.name}</p>
 *    }
 */
export const useSpotifySong = (): UseSpotifySong => {
  const { accessToken, config } = useSpotifyConfig();

  const { data, isLoading, mutate, isValidating } = useSWR('spotify', () => fetcher(accessToken), {
    ...config,
  });

  let song;

  if (data) {
    if ('currently_playing_type' in data) {
      song = parseCurrentSpotifySong(data);
    } else {
      song = parseRecentSpotifySong(data);
    }
  }

  return {
    song,
    isLoading,
    update: mutate,
    isUpdating: isValidating,
  };
};

export const SpotifySongConfig: React.FunctionComponent<
  React.PropsWithChildren<SpotifySongContext>
> = ({ accessToken, config, children }) => {
  return (
    <SpotifySongConfigContext.Provider value={{ accessToken, config }}>
      {children}
    </SpotifySongConfigContext.Provider>
  );
};
