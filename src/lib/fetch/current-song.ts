import type { CurrentlyPlaying } from '../../types/spotify-api';

export async function fetchCurrentSpotifySong(
  accessToken: string,
): Promise<CurrentlyPlaying | undefined> {
  let song;

  try {
    const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing?market=US', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 204) return song;

    if (res.status === 200) {
      song = await res.json();
    }
  } catch (e) {
    Promise.reject(e);
  }

  return song;
}
