import { getAccessToken } from './fetch-access-token';
import { fetchMock } from '../../../test/utils/fetch-mock';
import { tokenResponse, errorTokenResponse } from '../../../test/mock-data/token-response';

describe('fetch access token', () => {
  test('returns a valid access token response', async () => {
    fetchMock({ access_token: 'valid access token' });

    const res = await getAccessToken('client-id', 'secret', 'refresh-token');

    expect(typeof res).toBe('object');
    expect(res).toStrictEqual(tokenResponse);
  });

  test('returns error token response', async () => {
    fetchMock({});

    const res = await getAccessToken('client-id', 'secret', 'refresh-token');

    expect(typeof res).toBe('object');
    expect(res).toStrictEqual(errorTokenResponse);
  });
});
