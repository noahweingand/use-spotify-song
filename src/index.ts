import { ResponseEnum, SpotifyTrack } from './types';
import { getAccessToken, getCurrentSpotifySong, getRecentlyPlayedSpotifySong } from './lib/fetcher';
import { mapCurrentSpotifySong, mapRecentSpotifySong } from './lib/parser';

async function getCurrentSong(accessToken: string): Promise<SpotifyTrack | null> {
  const res = await getCurrentSpotifySong(accessToken);
  const currentTrack = mapCurrentSpotifySong(res?.track);
  return currentTrack;
}

async function getRecentSong(accessToken: string): Promise<SpotifyTrack | null> {
  const res = await getRecentlyPlayedSpotifySong(accessToken);
  const recentTrack = mapRecentSpotifySong(res?.track);
  return recentTrack;
}

export async function useSpotifySong(
  clientId: string,
  secret: string,
  refreshToken: string,
  refresh: number = 15 * 1000,
): Promise<SpotifyTrack | null> {
  let song: SpotifyTrack | null = null;

  const tokenResponse = await getAccessToken(clientId, secret, refreshToken);

  if (tokenResponse.status === ResponseEnum.Failed) {
    console.log(tokenResponse);
  }

  const { accessToken } = tokenResponse;

  if (tokenResponse.status === 'success') {
    setInterval(
      async (accessToken) => {
        const currentSong = await getCurrentSong(accessToken);

        if (currentSong !== null) {
          song = currentSong;
        } else {
          const recentSong = await getRecentSong(accessToken);

          if (recentSong !== null) {
            song = recentSong;
          }
        }
      },
      refresh,
      accessToken,
    );

    return song;
  }
  return null;
}
