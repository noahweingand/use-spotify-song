import { fetchCurrentSpotifySong } from './fetch-current-song';
import { ResponseEnum } from '../constants';
import { CurrentlyPlaying } from '../../types/spotify-api';
import { songFetchMock } from '../../../test/utils/fetch-mock';
import { currentSongApiResponse } from '../../../test/mock-data/current-song-api';

const currentlyPlayingSuccess: CurrentlyPlaying = {
  status: ResponseEnum.Success,
  message: 'Current track received from Spotify API',
  data: currentSongApiResponse,
};

const currentlyPlayingFailed: CurrentlyPlaying = {
  status: ResponseEnum.Failed,
  message: 'Failed to fetch current Spotify song...',
};

describe('fetch currently playing song from Spotify API', () => {
  test('returns currently playing success response', async () => {
    songFetchMock(currentSongApiResponse);

    const res = await fetchCurrentSpotifySong('access-token');

    expect(typeof res).toBe('object');
    expect(res).toStrictEqual(currentlyPlayingSuccess);
  });

  test('returns currently playing failed response', async () => {
    songFetchMock({});

    const res = await fetchCurrentSpotifySong('access-token');

    expect(typeof res).toBe('object');
    expect(res).toStrictEqual(currentlyPlayingFailed);
  });
});
