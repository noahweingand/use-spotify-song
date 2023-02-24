import { mapAlbum, mapArtists } from './helpers';
import { apiAlbum, album } from '../../../test/mock-data/album';
import { apiArtist, artist, apiArtists, artists } from '../../../test/mock-data/artist';

describe('map Spotify API Album object to custom object', () => {
  test('returns valid custom album object', () => {
    const res = mapAlbum(apiAlbum);

    expect(typeof res).toBe('object');
    expect(JSON.stringify(res)).toStrictEqual(JSON.stringify(album));
  });
});

describe('map Spotify API Artist object to custom object', () => {
  test('given one artist, returns valid custom artist object', () => {
    const res = mapArtists(apiArtist);

    expect(typeof res).toBe('object');
    expect(JSON.stringify(res)).toStrictEqual(JSON.stringify(artist));
  });

  test('map multiple Spotify API Artist objects to custom object', () => {
    const res = mapArtists(apiArtists);

    expect(typeof res).toBe('object');
    expect(JSON.stringify(res)).toStrictEqual(JSON.stringify(artists));
  });
});
