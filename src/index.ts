import { useState, useEffect } from 'react';
import { fetchCurrentSpotifySong, fetchRecentlyPlayedSpotifySong } from './lib/fetch';
import { useSpotifyConfig } from './lib/hooks/use-spotify-song-config';
import { parseCurrentSpotifySong, parseRecentSpotifySong } from './lib/parsers';
import type { SpotifySong } from './types';

async function getSpotifySong(
  accessToken: string,
  recentOnly?: boolean,
): Promise<SpotifySong | undefined> {
  let song;

  if (!recentOnly) {
    const currentSong = await fetchCurrentSpotifySong(accessToken);

    if (currentSong && currentSong?.is_playing) {
      song = parseCurrentSpotifySong(currentSong);

      return song;
    }
  }

  const recentSong = await fetchRecentlyPlayedSpotifySong(accessToken);

  if (recentSong) {
    song = parseRecentSpotifySong(recentSong);
  }

  return song;
}

/**
 * Grab a currently playing Spotify song or the most recently played song
 *
 * @return   {SpotifySong}
 *           A Spotify song
 *
 * @example
 *   const Example = () => {
 *     const { song, loading } = useSpotifySong();
 *
 *     return <p>{loading ? 'Loading...' : song?.name}</p>
 *    }
 */
export const useSpotifySong = () => {
  const { accessToken, config } = useSpotifyConfig();
  const recentOnly = config?.recentOnly ?? false;
  const interval = config?.poll ?? undefined;

  const [spotifySong, setSpotifySong] = useState<SpotifySong | undefined>();
  const [loaded, setLoaded] = useState<boolean>(false);

  const updateSong = () => {
    setLoaded(false);

    getSpotifySong(accessToken, recentOnly).then((song) => {
      if (song) {
        setSpotifySong(song);
      }
      setLoaded(true);
    });
  };

  useEffect(() => {
    if (interval) {
      setInterval(updateSong, interval * 1000);
    } else {
      updateSong();
    }
  }, []);

  return {
    song: spotifySong,
    loaded,
    updateSong,
  };
};
