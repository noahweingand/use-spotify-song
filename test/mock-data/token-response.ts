import { ResponseEnum } from '../../src/lib/constants';
import { TokenResponse } from '../../src/types/spotify-api';

export const tokenResponse: TokenResponse = {
  accessToken: 'valid access token',
  status: ResponseEnum.Success,
  message: 'Access token succesfully obtained from Spotify authorization',
};

export const errorTokenResponse: TokenResponse = {
  accessToken: '',
  status: ResponseEnum.Failed,
  message: 'Failed to get access token from Spotify authorization',
};
