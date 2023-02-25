import { parseCurrentSpotifySong } from './index';
import { currentlyPlaying, currentSong } from './mock-data/current-song.mock';

describe('parse a current song api response into a custom song object', () => {
  test('given a current song response from the Spotify API, return a parsed spotify object', () => {
    const res = parseCurrentSpotifySong(currentlyPlaying);

    expect(typeof res).toBe('object');
    expect(res.isPlaying).toBe(true);
    expect(JSON.stringify(res)).toStrictEqual(JSON.stringify(currentSong));
  });
});
