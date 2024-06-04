App generated with:

`npx create-nx-workspace@latest frontend --preset=apps`

`npm install --save-dev @nx/react`

`nx g @nx/react:host host --directory=apps/host --remotes=first-remote`


#
## Issue:
I've created another workspace (in real world scenario it is different repository) with remote app.
I've updated configuration of host app so it should be able to use a remote from outside of the workspace, but it is not possible, even with running command:

`nx run host:serve --configuration=development --skipRemotes=remote_outside_workspace`

This command throws following error:
![Build error](./screenshots/remote-outside-workspace-error.png?raw=true)