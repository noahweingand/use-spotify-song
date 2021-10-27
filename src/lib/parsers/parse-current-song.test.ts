import { parseCurrentSpotifySong } from './index';
import { currentlyPlayingData, currentSong } from '../../../test/mock-data/current-song';

describe('parse a current song api response into a custom song object', () => {
  test('given a current song response from the Spotify API, return a parsed spotify object', () => {
    const res = parseCurrentSpotifySong(currentlyPlayingData);

    expect(typeof res).toBe('object');
    expect(res).toStrictEqual(currentSong);
    expect(res.isPlaying).toBe(true);
  });
});
