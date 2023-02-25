import { useContext } from 'react';
import { SpotifySongConfigContext } from '../context/spotify-song-config';

export const useSpotifyConfig = () => useContext(SpotifySongConfigContext);
