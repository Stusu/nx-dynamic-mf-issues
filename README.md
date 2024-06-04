App generated with:

`npx create-nx-workspace@latest frontend --preset=apps`

`npm install --save-dev @nx/react`

`nx g @nx/react:host host --directory=apps/host --remotes=first-remote`


#
## Issue:
When I switched static module federation to dynamic it appears that `-` character is not allowed in remote name.

![Error](./screenshots/error.png?raw=true)
![Issue place](./screenshots/issue-place.png?raw=true)