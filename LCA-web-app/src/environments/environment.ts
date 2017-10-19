// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAzhdTKM5QSlA53euO335HH8M4PrXU8gPY",
    authDomain: "lca-db.firebaseapp.com",
    databaseURL: "https://lca-db.firebaseio.com",
    projectId: "lca-db",
    storageBucket: "lca-db.appspot.com",
    messagingSenderId: "102443247730"
  }
};
