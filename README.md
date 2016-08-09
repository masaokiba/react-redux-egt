# Elite Guard Training 2

##Installation
- Install RethinkDB. https://www.rethinkdb.com/docs/install/
- Install Node Version Manager (nvm)
  - curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
- `nvm install 5`
- `npm i -g webpack@2.0.2-beta`
- `npm i -g avn`
- `rethinkdb` (in second terminal window)
- `git clone` this repo

## App Installation (/elite/app)
- In this Directory:
- `npm install`
- `npm run quickstart`

##Client-side development
- `npm start`
- http://localhost:3000

Rebuilds the client code in-memory & uses hot module reload so you can develop super fast!
On my 2013 MBA an initial build takes about 8 seconds and updates usually take 800ms

##Server-side development
- `npm run prod`
- http://localhost:3000
- If you edit any client or universal files, run `npm run bs` to rebuild & serve the bundle

This mode is great because you can make changes to the server ***without having to recompile the client code***
That means you only wait for the server to restart! GAME CHANGER!

##Database development
- http://localhost:8080 for RethinkDB
- All tables are managed in `./src/server/setupDB.js`. Just add your tables & indices to that file and rerun
- A standard ORM would check for tables & ensure indices at least once per build, doing it this way keeps your build times down
- http://localhost:3000/graphql for testing out new queries/mutations

##Webpack configs
####Development config
When the page is opened, a basic HTML layout is sent to the client along with a stringified redux store and a request for the common chunk of the JS.
The client then injects the redux store & router to create the page.
The redux devtools & logger are also loaded so you track your every state-changing action. 
The routes are loaded async, check your networks tab in chrome devtools and you'll see funny js files load now & again. 
If this isn't crazy amazing to you, then go away.

####Production config
Builds the website & saves it to the `build` folder.
Maps the styles to the components, but uses the prerendered CSS from the server config (below)
Separates the `vendor` packages and the `app` packages for a super quick, cachable second visit.
Creates a webpack manifest to enable longterm caching (eg can push new vendor.js without pushing a new app.js)
Optimizes the number of chunks, sometimes it's better to have the modules of 2 routes in the same chunk if they're small

####Server config
A webpack config builds the entire contents of the routes on the server side.
This is required because node doesn't know how to require `.css`.
When a request is sent to the server, react-router matches the url to the correct route & sends it to the client.
Any browser dependency is ignored & uglified away.
To test this, disable javascript in the browser. You'll see the site & css loads without a FOUC.

##How it works
When the page loads, it checks your localStorage for `EGT.token` & will automatically log you in if the token is legit.
If not, just head to the 'Sign up' page. The 'Sign up' page uses redux-form, which handles all errors, schema validation,
and submissions. Your credentials are set as variables in a GraphQL mutation & sent to the GraphQL endpoint and a user document (similar to Meteor's) and authToken is returned to your state.

When you enter the route, reducers are lazily loaded to the redux store and the `redux-optimistic-ui` reducer enhancer is applied to the store to enable an optimistic UI. To work, it requires some middleware that scans each redux action for an `isOptimistic` prop and reverts actions that fail server side.

When a component loads, it may subscribes to graphql subscriptions, which start a personalized changefeed.
When you do something that changes the persisted state that action is executed
optimistically on the client & emitted to the server where it is validated & sent to the database.
The database then emits a changefeed doc to all subscribed viewers.
Since the DB doesn't know which client made the mutation, it always sends a changefeed to the server.
The server is smart enough to ignore sending that document back to the originator, but it does send an acknowledgement.
