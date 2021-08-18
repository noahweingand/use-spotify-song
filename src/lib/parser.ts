import { SpotifyTrack, SpotifyAlbum } from '../types';

type SpotifyArtist = {
  name: string;
};

// type Album = {
//   images: SpotifyAlbumImage[];
//   name: string;
//   release_date: string;
// };

type ExternalUrl = {
  spotify: string;
};

// const getAlbum = (album: Album): SpotifyAlbum => {
//   const images: SpotifyAlbumImage[] = [];
//   album.images.forEach((album) => {
//     images.push({
//       height: album.height,
//       width: album.height,
//       url: album.url
//     })
//   });

//   return {
//     images: images,
//     name: album.name,
//     releaseDate: album.release_date
//   }
// }

const getArtistNames = (artists: SpotifyArtist[]): string[] => {
  const ret: string[] = [];
  artists.forEach(artist => ret.push(artist.name));
  return ret;
};

export const mapRecentSpotifySong = (items: any): SpotifyTrack => {
  const { track, played_at }: { track: any; played_at: string } = items[0];
  const {
    name,
    artists,
    album,
    explicit,
    external_urls,
    preview_url,
  }: {
    name: string;
    artists: SpotifyArtist[];
    album: SpotifyAlbum;
    explicit: boolean;
    external_urls: ExternalUrl;
    preview_url: string;
  } = track;

  const song = {
    title: name,
    artists: getArtistNames(artists),
    album: album,
    explicit: explicit,
    externalUrl: external_urls?.spotify,
    previewUrl: preview_url,
    playedAt: played_at,
  };

  return song;
};

export const mapCurrentSpotifySong = (items: any): SpotifyTrack => {
  const { track, is_playing }: { track: any; is_playing: boolean } = items[0];
  const {
    name,
    artists,
    album,
    explicit,
    external_urls,
    preview_url,
  }: {
    name: string;
    artists: SpotifyArtist[];
    album: SpotifyAlbum;
    explicit: boolean;
    external_urls: ExternalUrl;
    preview_url: string;
  } = track;

  const song = {
    title: name,
    artists: getArtistNames(artists),
    album: album,
    explicit: explicit,
    externalUrl: external_urls?.spotify,
    previewUrl: preview_url,
    isPlaying: is_playing,
  };

  return song;
};
