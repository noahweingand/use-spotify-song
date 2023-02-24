import type { CurrentlyPlaying } from '../../types/spotify-api';

export async function fetchCurrentSpotifySong(accessToken: string): Promise<CurrentlyPlaying> {
  try {
    const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing?market=US', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    const data: CurrentlyPlaying = await res.json();

    return data;
  } catch (e) {
    throw new Error('Failed to get current song from Spotify API');
  }
}
