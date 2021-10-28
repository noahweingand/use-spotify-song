import { TokenResponse } from '../../types/spotify-api';
import { ResponseEnum } from '../constants';

export async function fetchAccessToken(
  clientId: string,
  clientSecret: string,
  refreshToken: string,
): Promise<TokenResponse> {
  try {
    const authReq = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    });

    const response = await authReq.json();

    return response.access_token
      ? {
          status: ResponseEnum.Success,
          message: 'Access token succesfully obtained from Spotify authorization',
          accessToken: response.access_token,
        }
      : {
          status: ResponseEnum.Failed,
          message: 'Failed to get access token from Spotify authorization',
          accessToken: '',
        };
  } catch (e) {
    return {
      status: ResponseEnum.Failed,
      message: 'Failed to get access token from Spotify authorization',
      accessToken: '',
    };
  }
}
