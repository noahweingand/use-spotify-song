import { parseRecentSpotifySong } from './index';
import { recentlyPlayedItem, recentSong } from '../../../test/mock-data/recent-song';

describe('parse a recent song api response and return a custom song object', () => {
  test('given a recent song response from Spotify API, return a parsed spotify object', () => {
    const res = parseRecentSpotifySong(recentlyPlayedItem);

    expect(typeof res).toBe('object');
    expect(res.isPlaying).toBe(false);
    expect(JSON.stringify(res)).toStrictEqual(JSON.stringify(recentSong));
  });
});
