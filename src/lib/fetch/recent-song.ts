import type { RecentlyPlayed, RecentlyPlayedItem } from '../../types/spotify-api';

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

    const data: RecentlyPlayed = await res.json();

    const { items } = data;

    if (items) {
      const [item] = items;
      song = item;
    }

    return song;
  } catch (e) {
    throw new Error('Failed to fetch recently played song from Spotify API');
  }
}
