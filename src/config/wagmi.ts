import { avalanche, avalancheFuji } from 'wagmi/chains'

import { getDefaultConfig } from '@rainbow-me/rainbowkit';

export const wagmiConfig = getDefaultConfig({
  appName: 'Test app',
  projectId: '',
  chains: [avalanche, avalancheFuji],
});