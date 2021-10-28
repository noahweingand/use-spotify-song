import { RecentlyPlayedData, CurrentlyPlayingData } from '../../src/types/spotify-api';

export const accessTokenFetchMock = (data: Record<string, string> | Record<string, never>) => {
  const mock = data;
  const resPromise = Promise.resolve(mock);
  const mockFetchPromise = Promise.resolve({
    json: () => resPromise,
  });

  const globalRef = global;

  globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
};

export const songFetchMock = (
  data: RecentlyPlayedData | CurrentlyPlayingData | Record<string, never>,
) => {
  const mock = data;
  const resPromise = Promise.resolve(mock);
  const mockFetchPromise = Promise.resolve({
    json: () => resPromise,
  });

  const globalRef = global;

  globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
};
