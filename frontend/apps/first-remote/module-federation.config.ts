import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'first_remote',
  library: {
    name: 'first_remote',
    type: 'var',
  },
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
