import { CurrentlyPlayingData } from '../../src/types/spotify-api';

export const currentSongApiResponse: CurrentlyPlayingData = {
  item: {
    album: {
      album_type: 'album',
      external_urls: {
        spotify: 'https://open.spotify.com/album/0oGzSazidykcL5XNTEuS9z',
      },
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b27330ceed1406b1a6c0fb7b1454',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e0230ceed1406b1a6c0fb7b1454',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d0000485130ceed1406b1a6c0fb7b1454',
          width: 64,
        },
      ],
      name: 'Magic Oneohtrix Point Never',
      release_date: '2020-10-30',
      total_tracks: 17,
    },
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/2wPDbhaGXCqROrVmwDdCrK',
        },
        name: 'Oneohtrix Point Never',
      },
    ],
    duration_ms: 131209,
    explicit: false,
    external_urls: {
      spotify: 'https://open.spotify.com/track/75VpgUrHzAnIGjTGumAYWn',
    },
    name: 'Bow Ecco',
    popularity: 31,
    preview_url:
      'https://p.scdn.co/mp3-preview/dd8d35c8a354ebb6a6cf6135403cfd20ca8d2edc?cid=993e7222ce534776aa74b4e26218781d',
  },
  is_playing: true,
};
