export const Credentials = () => {
     return {
        ClientId: 'ee9a95c32a844eb7aaa8dacdec553ae5',
        ClientSecret: '6f6ec549ac3b4bb5a94571260d1d01c4'
    }
}

export const CLIENT_ID = "c8085a7143fa48549dc7813486a5b7c2"; 
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
];
export const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);