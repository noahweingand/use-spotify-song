import { RecentlyPlayedData } from '../../src/types/spotify-api';

export const recentSongApiResponse: RecentlyPlayedData = {
  items: [
    {
      track: {
        album: {
          album_type: 'album',
          external_urls: {
            spotify: 'https://open.spotify.com/album/3eFHSj92hUa4efE4f4I3qY',
          },
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2735dba63ffe84961fde2c7d1ee',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e025dba63ffe84961fde2c7d1ee',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048515dba63ffe84961fde2c7d1ee',
              width: 64,
            },
          ],
          name: 'Anthology 1970-1974',
          release_date: '1994-10-18',
          total_tracks: 32,
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3ICyfoySNDZqtBVmaBT84I',
            },
            name: 'War',
          },
        ],
        duration_ms: 246333,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/0wva7TtE4QUkKtnMHP9BpT',
        },
        name: 'Spill the Wine',
        popularity: 58,
        preview_url:
          'https://p.scdn.co/mp3-preview/a37c13506ccb943ec49ebf686856e58b4dafb7e8?cid=993e7222ce534776aa74b4e26218781d',
      },
      played_at: '2021-10-27T22:15:53.679Z',
    },
  ],
};
