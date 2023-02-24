import { mapArtists, mapAlbum } from './helpers';
import type { RecentlyPlayedItem } from '../../types/spotify-api';
import type { SpotifySong } from '../../types';

export const parseRecentSpotifySong = (data: RecentlyPlayedItem): SpotifySong => {
  const { track, played_at } = data;
  const { artists, album, duration_ms, explicit, external_urls, name, popularity, preview_url } =
    track;

  const song = {
    artists: mapArtists(artists),
    album: mapAlbum(album),
    duration: duration_ms,
    explicit,
    isPlaying: false,
    name,
    playedAt: played_at,
    popularity,
    previewUrl: preview_url,
    url: external_urls.spotify,
  };

  return song;
};
