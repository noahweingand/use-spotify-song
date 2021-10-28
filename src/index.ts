import { useState, useEffect } from 'react';
import {
  fetchAccessToken,
  fetchCurrentSpotifySong,
  fetchRecentlyPlayedSpotifySong,
} from './lib/fetchers';
import { parseCurrentSpotifySong, parseRecentSpotifySong } from './lib/parsers';
import { UseSpotifySongConfig, SpotifySongInstance, SpotifySong, SpotifySongError } from './types';
import { ResponseEnum } from './lib/constants';

async function getCurrentSong(accessToken: string): Promise<SpotifySongInstance> {
  const { status, message, data } = await fetchCurrentSpotifySong(accessToken);

  if (data) {
    const song = parseCurrentSpotifySong(data);

    return { song };
  }

  return {
    error: {
      status,
      message,
    },
    song: null,
  };
}

async function getRecentSong(accessToken: string): Promise<SpotifySongInstance> {
  const { status, message, data } = await fetchRecentlyPlayedSpotifySong(accessToken);

  if (data) {
    const song = parseRecentSpotifySong(data);

    return { song };
  }

  return {
    error: {
      status,
      message,
    },
    song: null,
  };
}

const updateSong = async (
  clientId: string,
  secret: string,
  refreshToken: string,
  recentOnlyFlag: boolean,
): Promise<SpotifySongInstance | null> => {
  const tokenResponse = await fetchAccessToken(clientId, secret, refreshToken);

  if (tokenResponse.status === ResponseEnum.Failed) {
    return {
      song: null,
      error: {
        status: tokenResponse.status,
        message: tokenResponse.message,
      },
    };
  }

  const { accessToken } = tokenResponse;

  if (recentOnlyFlag) {
    return getRecentSong(accessToken);
  }

  const currentSong = await getCurrentSong(accessToken);

  if (currentSong.error) {
    const recentSong = await getRecentSong(accessToken);

    if (recentSong.error) {
      const { error } = recentSong;

      return {
        error: {
          status: error.status,
          message: error.message,
        },
        song: null,
      };
    }

    return recentSong;
  }

  return currentSong;
};

/**
 * Grab your currently playing Spotify song or the most recently played song
 *
 * @param    {string} clientId
 *           Spotify API client ID
 *
 * @param    {string} secret
 *           Spotify API secret token
 *
 * @param    {string} refreshToken
 *           Spotify API refresh token used to reauthorize once authorization expires
 *
 * @param    {UseSpotifySongConfig} config
 *
 *
 * @return   {SpotifySong}
 *           A Spotify song
 *
 * @example
 *   const ExampleComponent = () => {
 *     const { song, error, loaded} = useSpotifySong('client-id', 'secret', 'refresh-token');
 *
 *     return <p>{loaded ? song?.name : 'Loading...'}</p>
 *    }
 */
export const useSpotifySong = (
  clientId: string,
  secret: string,
  refreshToken: string,
  config?: UseSpotifySongConfig,
) => {
  const recentOnly = config?.recentOnly ?? false;
  const interval = config?.poll ?? undefined;

  const [spotifySong, setSpotifySong] = useState<SpotifySong | null>(null);
  const [spotifyError, setSpotifyError] = useState<SpotifySongError | undefined>(undefined);
  const [loaded, setLoaded] = useState<boolean>(false);

  const getSong = () => {
    setLoaded(false);

    updateSong(clientId, secret, refreshToken, recentOnly).then((data) => {
      if (data !== null) {
        const { song, error } = data;

        if (song !== null) {
          setSpotifySong(song);
        }

        if (error) {
          setSpotifyError(error);
        }
      }
      setLoaded(true);
    });
  };

  useEffect(() => {
    if (interval) {
      setInterval(getSong, interval * 1000);
    } else {
      getSong();
    }
  }, []);

  return {
    song: spotifySong,
    error: spotifyError,
    loaded,
    getSong,
  };
};
