import { Album } from '../../src/types/spotify-api';
import { SpotifyAlbum } from '../../src/types/index';

export const apiAlbum: Album = {
  album_type: 'album',
  images: [
    {
      height: 640,
      url: 'https://i.scdn.co/image/ab67616d0000b2735755e164993798e0c9ef7d7a',
      width: 640,
    },
    {
      height: 300,
      url: 'https://i.scdn.co/image/ab67616d00001e025755e164993798e0c9ef7d7a',
      width: 300,
    },
    {
      height: 64,
      url: 'https://i.scdn.co/image/ab67616d000048515755e164993798e0c9ef7d7a',
      width: 64,
    },
  ],
  name: 'Whenever You Need Somebody',
  release_date: '1981-11-12',
  total_tracks: 10,
  external_urls: { spotify: 'https://open.spotify.com/album/5Z9iiGl2FcIfa3BMiv6OIw' },
};

export const album: SpotifyAlbum = {
  albumType: 'album',
  images: [
    {
      height: 640,
      url: 'https://i.scdn.co/image/ab67616d0000b2735755e164993798e0c9ef7d7a',
      width: 640,
    },
    {
      height: 300,
      url: 'https://i.scdn.co/image/ab67616d00001e025755e164993798e0c9ef7d7a',
      width: 300,
    },
    {
      height: 64,
      url: 'https://i.scdn.co/image/ab67616d000048515755e164993798e0c9ef7d7a',
      width: 64,
    },
  ],
  name: 'Whenever You Need Somebody',
  releaseDate: '1981-11-12',
  totalTracks: 10,
  url: 'https://open.spotify.com/album/5Z9iiGl2FcIfa3BMiv6OIw',
};
