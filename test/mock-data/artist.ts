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
    name: 'BADBADNOTGOOD',
    external_urls: { spotify: 'https://open.spotify.com/artist/65dGLGjkw3UbddUg2GKQoZ' },
  },
  {
    name: 'Samuel T. Herring',
    external_urls: { spotify: 'https://open.spotify.com/artist/6K4I1MPd7m8IztUdtrF4YU' },
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
    name: 'BADBADNOTGOOD',
    url: 'https://open.spotify.com/artist/65dGLGjkw3UbddUg2GKQoZ',
  },
  {
    name: 'Samuel T. Herring',
    url: 'https://open.spotify.com/artist/6K4I1MPd7m8IztUdtrF4YU',
  },
];
