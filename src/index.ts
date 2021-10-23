import { useState, useEffect } from 'react';
import { getAccessToken, getCurrentSpotifySong, getRecentlyPlayedSpotifySong } from './lib/fetcher';
import { mapCurrentSpotifySong, mapRecentSpotifySong } from './lib/parser';
import { UseSpotifySongConfig, SpotifySongInstance } from './types';
import { ResponseEnum } from './types/spotify-api';

async function getCurrentSong(accessToken: string): Promise<SpotifySongInstance> {
  const { status, message, data } = await getCurrentSpotifySong(accessToken);

  if (data) {
    const song = mapCurrentSpotifySong(data);

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
  const { status, message, data } = await getRecentlyPlayedSpotifySong(accessToken);

  if (data) {
    const song = mapRecentSpotifySong(data);

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
  const tokenResponse = await getAccessToken(clientId, secret, refreshToken);

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
 *           Spotify's API client ID
 *
 * @param    {string} secret
 *           Spotify's API secret token
 *
 * @param    {string} refreshToken
 *           Spotify's API refresh token used to reauthenticate once an API token expires
 *
 * @param    {UseSpotifySongConfig} config
 *
 *
 * @return   {SpotifySong}
 *           A Spotify song
 *
 * @example
 *   const ExampleComponent = () => {
 *     const song = useSpotifySong();
 *
 *     return (
 *       <>
 *         <p>Song name: {song.name}</p>
 *       </>
 *      )
 *    }
 */
export const useSpotifySong = (
  clientId: string,
  secret: string,
  refreshToken: string,
  config: UseSpotifySongConfig,
): SpotifySongInstance | null => {
  const [songData, setSongData] = useState<SpotifySongInstance | null>(null);

  const { interval, noInterval, recentOnly } = config;

  const timeoutInterval = interval ?? 30;
  const noIntervalFlag = noInterval ?? false;
  const recentOnlyFlag = recentOnly ?? false;

  useEffect(() => {
    if (noIntervalFlag) {
      setTimeout(() => {
        updateSong(clientId, secret, refreshToken, recentOnlyFlag).then((data) => {
          setSongData(data);
        });
      }, timeoutInterval * 1000);
    } else {
      updateSong(clientId, secret, refreshToken, recentOnlyFlag).then((data) => {
        setSongData(data);
      });
    }
  }, [songData]);

  return songData;
};
