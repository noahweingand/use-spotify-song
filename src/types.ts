export enum ResponseEnum {
  Success = 'success',
  Failed = 'failed',
}

export type TokenResponse = {
  accessToken: string;
  status: string;
  message: string;
};

export type SpotifyAlbumImage = {
  height: number;
  width: number;
  url: string;
};

export type SpotifyAlbum = {
  images: SpotifyAlbumImage;
  title: string; // map
  releaseDate: string; // map
};

export interface SpotifyTrack {
  title: string; // map
  album: SpotifyAlbum;
  artists: string[]; // map
  explicit: boolean;
  externalUrl: string; // map
  previewUrl: string; // map
  isPlaying?: boolean;
  playedAt?: string;
}

export interface SpotifyTrackResponse {
  status: string;
  message: string;
  track?: SpotifyTrack;
}
