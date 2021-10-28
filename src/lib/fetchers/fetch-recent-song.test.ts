import { fetchRecentlyPlayedSpotifySong } from './fetch-recent-song';
import { ResponseEnum } from '../constants';
import { RecentlyPlayed } from '../../types/spotify-api';
import { recentSongFetchMock } from '../../../test/utils/fetch-mock';
import { recentSongApiResponse } from '../../../test/mock-data/recent-song-api';

const recentlyPlayedSuccess: RecentlyPlayed = {
  status: ResponseEnum.Success,
  message: 'Recent track received from Spotify API',
  data: recentSongApiResponse.items[0],
};

const recentlyPlayedFailed: RecentlyPlayed = {
  status: ResponseEnum.Failed,
  message: 'Failed to fetch recently played Spotify song...',
};

describe('fetch recent song from Spotify API', () => {
  test('returns recently played success response', async () => {
    recentSongFetchMock(recentSongApiResponse);

    const res = await fetchRecentlyPlayedSpotifySong('access-token');

    expect(typeof res).toBe('object');
    expect(res).toStrictEqual(recentlyPlayedSuccess);
  });

  test('returns recently played failed response', async () => {
    recentSongFetchMock({});

    const res = await fetchRecentlyPlayedSpotifySong('access-token');

    expect(typeof res).toBe('object');
    expect(res).toStrictEqual(recentlyPlayedFailed);
  });
});
