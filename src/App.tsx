import {useEffect, useState} from "react";
import { getParamsAfterAuth } from "./utils/utlis";
import { Playlist, Playlists, UserProfile } from "./interfaces/userInterface";
import './App.css';
import { CLIENT_ID, REDIRECT_URL_AFTER_LOGIN, SCOPES_URL_PARAM, SPOTIFY_AUTHORIZE_ENDPOINT } from "./config/spotifyCredential";
import { spotifyService } from "./service/spotifyService";
import { SpotifyUserProfile } from "./pages/SpotifyUserProfil";
import { UserLikedTrack } from "./pages/UserLikedTrack";
import { UserPlaylist } from "./pages/UserPlaylist";

function App() {

  const [loaded, setLoaded] = useState(false)
  const [user, setUser] = useState<UserProfile>()
  const [likedTrack, setlikedTrack] = useState<Playlists>()
  const [playlist, setPlaylist] = useState<Playlists>()
  const [token, setToken] = useState("")

  const loginToSpotify = () => {
    window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  }

  //getProfile
  const getProfile = async () => {
    const profile = await spotifyService.getUserProfile(
      localStorage.getItem("accessToken") || token || ""
    );
    setUser(profile);
  }

  //get like track
  const getTrack = async () => {
    const track = await spotifyService.getUserLikedTracks(
        localStorage.getItem("accessToken") || token || ""
        );
        setlikedTrack(track);
    };

  // getplaylist
  const getPlaylist = async () => {
    const playlist = await spotifyService.getUserPlaylist(
      localStorage.getItem("accessToken") || token || ""
    );
    setPlaylist(playlist);
  }

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } = getParamsAfterAuth(window.location.hash);
      localStorage.clear();
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
      setToken(access_token)
      if(access_token){
        getPlaylist()    
        getProfile()    
        getTrack()
      }
        setLoaded(true)
      } else {
        setLoaded(false)
    }

  }, [])

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  }

  return(
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>
        {!loaded ? (
          <button className=" bg-green-500 hover:bg-green-700 text-white"
          onClick={loginToSpotify}>Login to spotify</button>
        ) : (
          <button className=" bg-red-500 hover:bg-red-700 text-white" onClick={logout}>Logout</button>
        )}

        {
        loaded && user && (
          <div>
            <SpotifyUserProfile {...user}/>
            <hr />
            {playlist && <UserPlaylist {...playlist} />}
          </div>
        )
        }
      </header>
    </div>
  )

}

export default App;