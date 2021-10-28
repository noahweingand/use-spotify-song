import { CurrentlyPlaying, CurrentlyPlayingData } from '../../types/spotify-api';
import { ResponseEnum } from '../constants';

export async function fetchCurrentSpotifySong(accessToken: string): Promise<CurrentlyPlaying> {
  try {
    const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing?market=US', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    const data: CurrentlyPlayingData = await res.json();
    const { item, is_playing } = data;

    if (item && is_playing) {
      return {
        status: ResponseEnum.Success,
        message: 'Current track received from Spotify API',
        data,
      };
    }
    return {
      status: ResponseEnum.Failed,
      message: 'Failed to fetch current Spotify song...',
    };
  } catch (e) {
    return {
      status: ResponseEnum.Failed,
      message: 'Failed to fetch current Spotify song...',
    };
  }
}
