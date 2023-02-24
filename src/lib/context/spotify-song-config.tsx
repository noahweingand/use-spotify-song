import { createContext } from 'react';
import type { UseSpotifySongConfig } from '../../types';

export const SpotifySongConfig = createContext<{
  accessToken: string;
  config?: UseSpotifySongConfig;
}>({ accessToken: '', config: { recentOnly: false } });
