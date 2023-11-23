# React-spotify test

Application qui utilise l'API de Spotify.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install.

```bash
npm install
```

## prerequisites
````
Spotify dashboard account - cliend_Id, secret_Id
````
## Create file named spotifyCredential.tsx to get credential in your spotify services
```
export const Credentials = () => {

     return {
         ClientId: 'ENTER YOUR CLIENT ID',
         ClientSecret: 'ENTER YOUR CLIENT SECRET'
     }
}
export const CLIENT_ID = "ENTER YOUR CLIENT ID"; 
export const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
export const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000";
export const SPACE_DELIMITER = "%20";
export const SCOPES = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-modify-private",
    "user-library-read",
    "user-top-read",
    "user-library-modify",
    "user-read-recently-played",
    "user-follow-read",
    "example scope"
];
export const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);
```

## run the project
````
npm run start
````

## License

[MIT](https://choosealicense.com/licenses/mit/)