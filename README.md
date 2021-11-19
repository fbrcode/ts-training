# Typescript Training

## Commands

### Backend

```shell
mkdir backend
cd backend
yarn init -y # init package management (package.json)
yarn add typescript -D # add typescript as dev dependency (not global)
yarn add express # add express server
yarn add @types/express -D # add express types as dev dependency / for intelisense, etc
yarn tsc src/index.ts # transpile typescript to javascript
node src/index.js # run app
yarn tsc --init # create config file tsconfig.json / typescript setup
yarn tsc # transpile all .ts using the config file
yarn add ts-node-dev -D # auto-transpile
# add to package json the script call: "dev:server": "ts-node-dev src/index.ts --respawn --transpileOnly"
yarn dev:server # run a restart-on-save + transpile server
yarn add cors # add cors (Cross-Origin Resource Sharing) for server switch access
yarn add @types/cors -D # add cors types as dev dependency / for intelisense, etc
yarn tsc # transpile convert all .ts files
node dist/index.js # run the server 
```

Start backend dev server: `yarn dev:server`

### Frontend

```shell
cd .. # get back to training folder
yarn create react-app frontend --template=typescript # setup react fromend infrastructure with typescript
# create ts (for html tags) and tsx (react component that will use these html tags)
cd frontend
yarn start # start up react frontend
yarn add axios # perform backend API calls 
```

Start frontend server: `yarn start`
