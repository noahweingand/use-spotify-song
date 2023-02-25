import { SpotifyAlbumImage } from '.';

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

export interface RecentlyPlayedItem {
  track: SpotifyAPISong;
  played_at: string;
}

export interface RecentlyPlayed {
  items: RecentlyPlayedItem[];
}

export interface CurrentlyPlaying {
  item: SpotifyAPISong;
  is_playing: boolean;
  currently_playing_type: string;
}
