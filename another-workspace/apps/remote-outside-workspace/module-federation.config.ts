import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote_outside_workspace',
  library: {
    name: 'remote_outside_workspace',
    type: 'var',
  },
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
