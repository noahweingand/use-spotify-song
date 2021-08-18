import fetch from 'node-fetch';
import { AccessToken, SpotifyTrack, Error } from '../types';
import { mapRecentSpotifySong, mapCurrentSpotifySong } from './parser';

export async function getAccessToken(
  clientId: string,
  clientSecret: string,
  refreshToken: string,
): Promise<AccessToken> {
  try {
    const authReq = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization:
          'Basic ' +
          new Buffer(clientId + ':' + clientSecret).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken!,
      }),
    });

    const { access_token }: { access_token: string } = await authReq.json();

    return {
      accessToken: access_token,
      status: 'success',
    };
  } catch (e) {
    console.log(e);
    return {
      status: 'failed',
      message: 'Failed to get access token from Spotify authorization',
    };
  }
}

export async function getRecentlyPlayedSpotifySong(
  accessToken: string,
): Promise<SpotifyTrack | Error> {
  try {
    const res = await fetch(
      'https://api.spotify.com/v1/me/player/recently-played?limit=1',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      },
    );

    const data = await res.json();
    if (data.items) {
      const { items }: { items: any } = data;
      return mapRecentSpotifySong(items);
    } else {
      return {
        status: 'failed',
        message: 'Something went wrong with getting recently played song...',
      };
    }
  } catch (e) {
    console.log(e);
    return {
      status: 'failed',
      message: 'Something went wrong with getting recently played song...',
    };
  }
}

export async function getCurrentSpotifySong(
  accessToken: string,
): Promise<SpotifyTrack | Error> {
  try {
    const res = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing?market=US',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      },
    );

    const data = await res.json();
    if (data.item) {
      const { item }: { item: any } = data;
      return mapCurrentSpotifySong(item);
    } else {
      return {
        status: 'failed',
        message: 'Something went wrong with getting current song...',
      };
    }
  } catch (e) {
    console.log(e);
    return {
      status: 'failed',
      message: 'Something went wrong with getting current song...',
    };
  }
}
