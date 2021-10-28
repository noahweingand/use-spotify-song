import { fetchAccessToken } from './fetch-access-token';
import { accessTokenFetchMock } from '../../../test/utils/fetch-mock';
import { tokenResponse, errorTokenResponse } from '../../../test/mock-data/token-response';

describe('fetch access token from Spotify Authentication API', () => {
  test('returns successful access token response', async () => {
    accessTokenFetchMock({ access_token: 'valid access token' });

    const res = await fetchAccessToken('client-id', 'secret', 'refresh-token');

    expect(typeof res).toBe('object');
    expect(res).toStrictEqual(tokenResponse);
  });

  test('returns failed token response', async () => {
    accessTokenFetchMock({});

    const res = await fetchAccessToken('client-id', 'secret', 'refresh-token');

    expect(typeof res).toBe('object');
    expect(res).toStrictEqual(errorTokenResponse);
  });
});
