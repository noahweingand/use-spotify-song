import { Album } from '../../src/types/spotify-api';
import { SpotifyAlbum } from '../../src/types/index';

export const apiAlbum: Album = {
  album_type: 'album',
  images: [
    {
      height: 640,
      url: 'https://i.scdn.co/image/ab67616d0000b273087255518781845b84bc8f92',
      width: 640,
    },
    {
      height: 300,
      url: 'https://i.scdn.co/image/ab67616d00001e02087255518781845b84bc8f92',
      width: 300,
    },
    {
      height: 64,
      url: 'https://i.scdn.co/image/ab67616d00004851087255518781845b84bc8f92',
      width: 64,
    },
  ],
  name: 'IV',
  release_date: '2016-07-08',
  total_tracks: 11,
  external_urls: { spotify: 'https://open.spotify.com/album/68HLpLmCtvFKUqwQpUCqwn' },
};

export const album: SpotifyAlbum = {
  albumType: 'album',
  images: [
    {
      height: 640,
      url: 'https://i.scdn.co/image/ab67616d0000b273087255518781845b84bc8f92',
      width: 640,
    },
    {
      height: 300,
      url: 'https://i.scdn.co/image/ab67616d00001e02087255518781845b84bc8f92',
      width: 300,
    },
    {
      height: 64,
      url: 'https://i.scdn.co/image/ab67616d00004851087255518781845b84bc8f92',
      width: 64,
    },
  ],
  name: 'IV',
  releaseDate: '2016-07-08',
  totalTracks: 11,
  url: 'https://open.spotify.com/album/68HLpLmCtvFKUqwQpUCqwn',
};
