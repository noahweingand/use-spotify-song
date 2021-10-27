import { Artist } from '../../src/types/spotify-api';
import { SpotifyArtist } from '../../src/types';

export const apiArtist: Artist[] = [
  {
    name: 'Rick Astley',
    external_urls: { spotify: 'https://open.spotify.com/artist/0gxyHStUsqpMadRV0Di1Qt' },
  },
];

export const apiArtists: Artist[] = [
  {
    name: 'Rio Da Yung Og',
    external_urls: { spotify: 'https://open.spotify.com/artist/6O1vRHWVGKJTnWuJmItnsx' },
  },
  {
    name: 'Rmc Mike',
    external_urls: { spotify: 'https://open.spotify.com/artist/1j9595o6FMO4iLwci19nvo' },
  },
];

export const artist: SpotifyArtist[] = [
  {
    name: 'Rick Astley',
    url: 'https://open.spotify.com/artist/0gxyHStUsqpMadRV0Di1Qt',
  },
];

export const artists: SpotifyArtist[] = [
  {
    name: 'Rio Da Yung Og',
    url: 'https://open.spotify.com/artist/6O1vRHWVGKJTnWuJmItnsx',
  },
  {
    name: 'Rmc Mike',
    url: 'https://open.spotify.com/artist/1j9595o6FMO4iLwci19nvo',
  },
];
