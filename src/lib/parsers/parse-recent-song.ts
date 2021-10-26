import { mapArtists, mapAlbum } from './helpers/index';
import { RecentlyPlayedItem } from '../../types/spotify-api';
import { SpotifySong } from '../../types';

export const mapRecentSpotifySong = (data: RecentlyPlayedItem): SpotifySong => {
  const { track, played_at } = data;
  const { artists, album, duration_ms, explicit, external_urls, name, popularity, preview_url } =
    track;

  const song = {
    artists: mapArtists(artists),
    album: mapAlbum(album),
    explicit,
    duration: duration_ms,
    isPlaying: false,
    name,
    playedAt: played_at,
    popularity,
    previewUrl: preview_url,
    url: external_urls?.spotify,
  };

  return song;
};
