import type { RecentlyPlayedItem } from '../../types/spotify-api';

export async function fetchRecentlyPlayedSpotifySong(
  accessToken: string,
): Promise<RecentlyPlayedItem | undefined> {
  let song;

  try {
    const res = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      const { items } = await res.json();

      if (items) {
        const [item] = items;
        song = item;
      }
    }
  } catch (e) {
    Promise.reject(e);
  }

  return song;
}
