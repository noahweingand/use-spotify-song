import { mapAlbum, mapArtists } from './index';
import { apiAlbum, album } from '../../../../test/mock-data/album';
import { apiArtist, artist, apiArtists, artists } from '../../../../test/mock-data/artist';

describe('map Spotify API Album object to custom object', () => {
  test('returns valid custom album object', () => {
    const mappedAlbum = mapAlbum(apiAlbum);

    expect(typeof mappedAlbum).toBe('object');
    expect(mappedAlbum).toStrictEqual(album);
  });
});

describe('map Spotify API Artist object to custom object', () => {
  test('given one artist, returns valid custom artist object', () => {
    const mappedArtist = mapArtists(apiArtist);

    expect(typeof mappedArtist).toBe('object');
    expect(mappedArtist).toStrictEqual(artist);
  });

  test('given multiple artists, returns valid custom artist object', () => {
    const mappedArtist = mapArtists(apiArtists);

    expect(typeof mappedArtist).toBe('object');
    expect(mappedArtist).toStrictEqual(artists);
  });
});
