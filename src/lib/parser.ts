import { SpotifySong, SpotifyArtist, SpotifyAlbum } from '../types';
import {
  ExternalUrl,
  Album,
  Artist,
  RecentlyPlayedItem,
  CurrentlyPlayingData,
} from '../types/spotify-api';

const getUrl = (urlObj: ExternalUrl): string => urlObj.spotify;

const mapAlbum = (apiAlbum: Album): SpotifyAlbum => {
  return {
    albumType: apiAlbum.album_type,
    images: apiAlbum.images,
    name: apiAlbum.name,
    releaseDate: apiAlbum.release_date,
    totalTracks: apiAlbum.total_tracks,
    url: getUrl(apiAlbum.external_urls),
  };
};

const mapArtists = (apiArtists: Artist[]): SpotifyArtist[] => {
  const artists: SpotifyArtist[] = [];

  apiArtists.forEach((artist) =>
    artists.push({
      name: artist.name,
      url: getUrl(artist.external_urls),
    }),
  );

  return artists;
};

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

export const mapCurrentSpotifySong = (data: CurrentlyPlayingData): SpotifySong => {
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
