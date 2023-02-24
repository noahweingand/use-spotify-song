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
  isPlaying?: boolean;
  name: string;
  playedAt?: string;
  popularity: number;
  previewUrl: string;
  url: string;
}

export type UseSpotifySongConfig = {
  poll?: number;
  recentOnly?: boolean;
};
