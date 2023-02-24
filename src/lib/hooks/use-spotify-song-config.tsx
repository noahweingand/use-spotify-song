import { useContext } from 'react';
import { SpotifySongConfig } from '../context/spotify-song-config';

export const useSpotifyConfig = () => useContext(SpotifySongConfig);
