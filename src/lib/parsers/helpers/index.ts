import { SpotifyArtist, SpotifyAlbum } from '../../../types';
import { ExternalUrl, Album, Artist } from '../../../types/spotify-api';

const getUrl = (urlObj: ExternalUrl): string => urlObj.spotify;

export const mapAlbum = (apiAlbum: Album): SpotifyAlbum => {
  return {
    albumType: apiAlbum.album_type,
    images: apiAlbum.images,
    name: apiAlbum.name,
    releaseDate: apiAlbum.release_date,
    totalTracks: apiAlbum.total_tracks,
    url: getUrl(apiAlbum.external_urls),
  };
};

export const mapArtists = (apiArtists: Artist[]): SpotifyArtist[] => {
  const artists: SpotifyArtist[] = [];

  apiArtists.forEach((artist) =>
    artists.push({
      name: artist.name,
      url: getUrl(artist.external_urls),
    }),
  );

  return artists;
};
