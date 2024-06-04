import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'first-remote',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
