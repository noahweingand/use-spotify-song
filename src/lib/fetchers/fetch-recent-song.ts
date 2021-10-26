import { RecentlyPlayed, RecentlyPlayedData } from '../../types/spotify-api';
import { ResponseEnum } from '../constants';

export async function getRecentlyPlayedSpotifySong(accessToken: string): Promise<RecentlyPlayed> {
  try {
    const res = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    const data: RecentlyPlayedData = await res.json();
    if (data.items) {
      const { items } = data;
      return {
        status: ResponseEnum.Success,
        message: 'Recent track received from Spotify API',
        data: items[0],
      };
    }
    return {
      status: ResponseEnum.Failed,
      message: 'Failed to fetch recently played Spotify song...',
    };
  } catch (e) {
    return {
      status: ResponseEnum.Failed,
      message: 'Failed to fetch recently played Spotify song...',
    };
  }
}
