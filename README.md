App generated with:

`npx create-nx-workspace@latest frontend --preset=apps`

`npm install --save-dev @nx/react`

`nx g @nx/react:host host --directory=apps/host --remotes=first-remote`


#
## Issue:
When I switched static module federation to dynamic it appears that `-` character is not allowed in remote name. The application crashed at runtime with following error:

![Error](./screenshots/error.png?raw=true)
![Issue place](./screenshots/issue-place.png?raw=true)

I've tried to fix it with modifying first-remote/module-federation.config.ts with:
```
import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'first-remote',
  library: {
    name: 'first-remote',
    type: 'var',
  },
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
```
what resulted with build error:
![Build error](./screenshots/build-error.png?raw=true)