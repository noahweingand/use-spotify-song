import useSWR from 'swr';
import { SpotifyTrack } from './types';
import {
  getAccessToken,
  getCurrentSpotifySong,
  getRecentlyPlayedSpotifySong,
} from './lib/fetcher';

export async function useSpotifySong(
  clientId: string,
  clientSecret: string,
  refreshToken: string,
  refresh: number = 15 * 1000,
  currentOnly: boolean = false,
  lastOnly: boolean = false,
) {
  try {
    const accessToken = await getAccessToken(
      clientId,
      clientSecret,
      refreshToken,
    );
    const test = 'teststste';
  const { currentTrack } = useSWR('latest', getCurrentSpotifySong(accessToken) {
    refreshInterval: refresh,
  });
  } catch (e) {}
}
