import { createContext } from 'react';
import type { SpotifySongContext } from '../../types';

export const SpotifySongConfigContext = createContext<SpotifySongContext>({
  accessToken: '',
  config: undefined,
});
