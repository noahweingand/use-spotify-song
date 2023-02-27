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
 * Grab the current or most recently played Spotify song
 *
 * @return   {UseSpotifySong}
 *           An object of Spotify song data, loading state, and a mutator and its respective validation state
 *
 * @example
 * const { song, isLoading, update, isUpdating } = useSpotifySong();
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
