import React, {useState, useEffect} from "react";
import { spotifyService } from "../service/spotifyService";
import { Playlists } from "../interfaces/userInterface";
import { getParamsAfterAuth } from "../utils/utlis";
import { UserLikedTrack } from "./UserLikedTrack";


export const UserPlaylist = ( playlist: Playlists ) => {

    const [userPlaylist, setUserPlaylist] = useState<Playlists>()
    const [token, setToken] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [likedTrack, setLikedTrack] = useState<Playlists>()



    useEffect(() => {
        if (window.location.hash) {
            const { access_token, expires_in, token_type } = getParamsAfterAuth(window.location.hash);
            localStorage.clear();
            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("tokenType", token_type);
            localStorage.setItem("expiresIn", expires_in);
            setToken(access_token)
            setLoaded(true)        
            getPlaylist()
            getTrack()
            } else {
              setLoaded(false)
          }   
    }, [
        playlist
    ])

    //getLikedTrack
    const getTrack = async () => {
        const track = await spotifyService.getUserLikedTracks(localStorage.getItem("accessToken") || token || ""
        );
        setLikedTrack(track);
    }

    // getplaylist
    const getPlaylist = async () => {
        const playlist = await spotifyService.getUserPlaylist(
        localStorage.getItem("accessToken") || token || ""
        );
        setUserPlaylist(playlist)
    }

    // dislike
    const like = async (id: string) => {
        const response = await spotifyService.likeTrack(token, id);
        if(token) {getTrack()}
    }

    //dislike function
    const dislike = async (id: string) => {
        const response = await spotifyService.unlikeTrack(token, id);
        if(token) {getTrack()}
    }

    const isTrackLiked = (id: string) => {
        if(likedTrack?.items.find((track: any) => track.track.id === id)){
            return true
        } else {
            return false
        }
    }


    return(
        <div className="overflow-x-auto" >
            {
                likedTrack && <UserLikedTrack {...likedTrack}/>
            }
            <hr />
            <h1 className="text-3xl font-semibold text-black-800 dark:text-black-100 
            flex justify-center
            mb-4
            px-6 py-2 border-solid border-blue-500 rounded shadow">
                My Playlist
            </h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-3">Id</th>
                        <th scope="col" className="px-4 py-3">Album</th>
                        <th scope="col" className="px-4 py-3">Artist</th>
                        <th scope="col" className="px-4 py-3">Action</th>
                    </tr>
                </thead>

                <tbody>
                {
                    userPlaylist?.items.map((playlist: any) => (
                        <tr key={playlist.track.id} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td className="px-4 py-2">
                                <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                                {
                                    playlist.track.id
                                } 
                                </span>
                            </td>
                            
                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="flex items-center">
                                {
                                    playlist.track.name
                                }
                                </div>
                            </td>

                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="flex items-center">

                            {
                                playlist.track.artists.map((artist: any, i: number) => (
                                    <span>{artist.name}</span>

                                ))
                            }
                            </div>
                        </td>

                        <td className="px-4 py-2">
                           {
                                 likedTrack && isTrackLiked(playlist.track.id) ? (
                                  <button
                                  onClick={() => dislike(playlist.track.id) } className="px-4 py-
                                  2 font-semibold leading-5 text-white transition-colors duration-200
                                  transform bg-red-500 rounded-md hover:bg-red-600 focus:outline-none
                                  focus:bg-red-600"
                                  >
                                  Dislike
                             </button>
                                 ) : (
                                  <button
                                  onClick={() => like(playlist.track.id) } className="px-4 py-
                                  2 font-semibold leading-5 text-white transition-colors duration-200
                                  transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none
                                  focus:bg-green-600"
                                  >
                                  Like
                             </button>
                                 )
                           }
                        </td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );

}