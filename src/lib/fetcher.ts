import fetch from 'node-fetch';
import { ResponseEnum, TokenResponse, SpotifyTrackResponse } from '../types';

export async function getAccessToken(
  clientId: string,
  clientSecret: string,
  refreshToken: string,
): Promise<TokenResponse> {
  try {
    const authReq = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${new Buffer(`${clientId}:${clientSecret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken!,
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
    console.log(e);
    return {
      status: ResponseEnum.Failed,
      message: 'Failed to get access token from Spotify authorization',
      accessToken: '',
    };
  }
}

export async function getRecentlyPlayedSpotifySong(
  accessToken: string,
): Promise<SpotifyTrackResponse> {
  try {
    const res = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (data.items) {
      const { items }: { items: any } = data;
      return {
        status: ResponseEnum.Success,
        message: 'Recent track received from Spotify API',
        track: items,
      };
    }
    return {
      status: ResponseEnum.Failed,
      message: 'Something went wrong with getting recently played song...',
    };
  } catch (e) {
    console.log(e);
    return {
      status: ResponseEnum.Failed,
      message: 'Something went wrong with getting recently played song...',
    };
  }
}

export async function getCurrentSpotifySong(accessToken: string): Promise<SpotifyTrackResponse> {
  try {
    const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing?market=US', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (data.item) {
      const { item }: { item: any } = data;
      return {
        status: ResponseEnum.Success,
        message: 'Current track received from Spotify API',
        track: item,
      };
    }
    return {
      status: ResponseEnum.Failed,
      message: 'Something went wrong with getting current song...',
    };
  } catch (e) {
    console.log(e);
    return {
      status: ResponseEnum.Failed,
      message: 'Something went wrong with getting current song...',
    };
  }
}
