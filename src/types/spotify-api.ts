import { SpotifyAlbumImage } from '.';
import { ResponseEnum } from '../lib/constants';

export type ExternalUrl = {
  spotify: string;
};

export type Album = {
  album_type: string;
  external_urls: ExternalUrl;
  images: SpotifyAlbumImage[];
  name: string;
  release_date: string;
  total_tracks: number;
};

export type Artist = {
  name: string;
  external_urls: ExternalUrl;
};

export interface SpotifyAPISong {
  album: Album;
  artists: Artist[];
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrl;
  name: string;
  popularity: number;
  preview_url: string;
}

export type TokenResponse = {
  accessToken: string;
  status: ResponseEnum;
  message: string;
};

export interface RecentlyPlayedItem {
  track: SpotifyAPISong;
  played_at: string;
}

export interface RecentlyPlayedData {
  items: RecentlyPlayedItem[];
}

export interface RecentlyPlayed {
  status: string;
  message: string;
  data?: RecentlyPlayedItem;
}

export type CurrentlyPlayingData = {
  item: SpotifyAPISong;
  is_playing: boolean;
};

export interface CurrentlyPlaying {
  status: string;
  message: string;
  data?: CurrentlyPlayingData;
}
