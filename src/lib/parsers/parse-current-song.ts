import { mapArtists, mapAlbum } from './helpers';
import type { CurrentlyPlaying } from '../../types/spotify-api';
import type { SpotifySong } from '../../types';

export const parseCurrentSpotifySong = (data: CurrentlyPlaying): SpotifySong => {
  const { item, is_playing } = data;
  const { artists, album, duration_ms, explicit, external_urls, name, popularity, preview_url } =
    item;

  const song = {
    artists: mapArtists(artists),
    album: mapAlbum(album),
    duration: duration_ms,
    explicit,
    isPlaying: is_playing,
    name,
    popularity,
    previewUrl: preview_url,
    url: external_urls.spotify,
  };

  return song;
};
