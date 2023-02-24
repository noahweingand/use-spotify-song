import type { SpotifyArtist, SpotifyAlbum } from '../../types';
import type { Album, Artist } from '../../types/spotify-api';

export const mapAlbum = (apiAlbum: Album): SpotifyAlbum => {
  return {
    albumType: apiAlbum.album_type,
    images: apiAlbum.images,
    name: apiAlbum.name,
    releaseDate: apiAlbum.release_date,
    totalTracks: apiAlbum.total_tracks,
    url: apiAlbum.external_urls.spotify,
  };
};

export const mapArtists = (apiArtists: Artist[]): SpotifyArtist[] => {
  return apiArtists.map((apiArtist) => {
    return {
      name: apiArtist.name,
      url: apiArtist.external_urls.spotify,
    };
  });
};
