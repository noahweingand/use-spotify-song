import type { KeyedMutator, SWRConfiguration } from 'swr';
import type { CurrentlyPlaying, RecentlyPlayedItem } from './spotify-api';

export type SpotifyAlbumImage = {
  height: number;
  url: string;
  width: number;
};

export type SpotifyAlbum = {
  albumType: string;
  images: SpotifyAlbumImage[];
  name: string;
  releaseDate: string;
  totalTracks: number;
  url: string;
};

export type SpotifyArtist = {
  name: string;
  url: string;
};

export interface SpotifySong {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  duration: number;
  explicit: boolean;
  isPlaying: boolean;
  name: string;
  playedAt?: string;
  popularity: number;
  previewUrl: string;
  url: string;
}

export type UseSpotifySong = {
  song: SpotifySong | undefined;
  isLoading: boolean;
  update: KeyedMutator<CurrentlyPlaying | RecentlyPlayedItem | undefined>;
  isUpdating: boolean;
};

export interface SpotifySongContext {
  accessToken: string;
  config?: SWRConfiguration;
}
