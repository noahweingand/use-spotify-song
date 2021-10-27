import { apiArtists, artists } from './artist';
import { apiAlbum, album } from './album';
import { RecentlyPlayedItem, SpotifyAPISong } from '../../src/types/spotify-api';
import { SpotifySong } from '../../src/types';

const apiCurrentSong: SpotifyAPISong = {
  artists: apiArtists,
  album: apiAlbum,
  duration_ms: 273864,
  explicit: false,
  name: 'Time Moves Slow',
  popularity: 68,
  preview_url:
    'https://p.scdn.co/mp3-preview/e762d13d8bc2e4243b88aec61ae34bd417a25b84?cid=993e7222ce534776aa74b4e26218781d',
  external_urls: { spotify: 'https://open.spotify.com/track/1I40L32fTSSkBkPeArX9Ul' },
};

export const recentlyPlayedItem: RecentlyPlayedItem = {
  track: apiCurrentSong,
  played_at: `2021-10-27T21:33:00.753Z`,
};

export const currentSong: SpotifySong = {
  artists,
  album,
  duration: 273864,
  explicit: false,
  isPlaying: false,
  playedAt: `2021-10-27T21:33:00.753Z`,
  name: 'Time Moves Slow',
  popularity: 68,
  previewUrl:
    'https://p.scdn.co/mp3-preview/e762d13d8bc2e4243b88aec61ae34bd417a25b84?cid=993e7222ce534776aa74b4e26218781d',
  url: 'https://open.spotify.com/track/1I40L32fTSSkBkPeArX9Ul',
};
