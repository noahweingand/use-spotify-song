import {
  ResponseEnum,
  TokenResponse,
  RecentlyPlayed,
  RecentlyPlayedData,
  CurrentlyPlaying,
  CurrentlyPlayingData,
} from '../types/spotify-api';

export async function getAccessToken(
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

export async function getRecentlyPlayedSpotifySong(accessToken: string): Promise<RecentlyPlayed> {
  try {
    const res = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    const data: RecentlyPlayedData = await res.json();
    if (data.items) {
      const { items } = data;
      return {
        status: ResponseEnum.Success,
        message: 'Recent track received from Spotify API',
        data: items[0],
      };
    }
    return {
      status: ResponseEnum.Failed,
      message: 'Failed to fetch recently played Spotify song...',
    };
  } catch (e) {
    return {
      status: ResponseEnum.Failed,
      message: 'Failed to fetch recently played Spotify song...',
    };
  }
}

export async function getCurrentSpotifySong(accessToken: string): Promise<CurrentlyPlaying> {
  try {
    const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing?market=US', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    const data: CurrentlyPlayingData = await res.json();
    if (data) {
      return {
        status: ResponseEnum.Success,
        message: 'Current track received from Spotify API',
        data,
      };
    }
    return {
      status: ResponseEnum.Failed,
      message: 'Failed to fetch current Spotify song...',
    };
  } catch (e) {
    return {
      status: ResponseEnum.Failed,
      message: 'Failed to fetch current Spotify song...',
    };
  }
}
