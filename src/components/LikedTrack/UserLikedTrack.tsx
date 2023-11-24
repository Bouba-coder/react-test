import React, { useState, useEffect } from "react";
import { spotifyService } from "../../service/spotifyService";
import { Playlists } from "../../interfaces/userInterface";
import { getParamsAfterAuth } from "../../utils/utlis";

export const UserLikedTrack = (playlist: Playlists) => {
  const [userTrack, setUserTrack] = useState<Playlists>();
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      if (window.location.hash) {
        const { access_token, expires_in, token_type } = getParamsAfterAuth(window.location.hash);
        localStorage.clear();
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("tokenType", token_type);
        localStorage.setItem("expiresIn", expires_in);
        setToken(access_token);
        setLoading(true);      
        setUserTrack(playlist);
        await getTrack();
      }

      setLoading(false);
    };

    getToken();
  }, [playlist]);

  const getTrack = async () => {
    const track = await spotifyService.getUserLikedTracks(localStorage.getItem("accessToken") || token || "");
    setUserTrack(track);
  };

  return (
    <div className="overflow-x-auto" id="htmlData">
      <h1 className="text-3xl font-semibold text-black-800 dark:text-black-100 
            flex justify-center mb-4 px-6 py-2 border-solid border-blue-500 rounded shadow">
        My Liked Tracks
      </h1>
      {loading && <p>Chargement en cours</p>}
      {!loading && (
        <table className="w-full text-sm text-left text-black-500 dark:text-black-400">
        <thead className="text-xs text-black-700 uppercase bg-gray-50 dark:bg-black-700 dark:text-black-400">
            <tr>
                <th scope="col" className="px-4 py-3">Nom</th>
                <th scope="col" className="px-4 py-3">Artist</th>
                <th scope="col" className="px-4 py-3">Album</th>
            </tr>
        </thead>

        <tbody>
        {
            userTrack?.items.map((track: any) => (
                <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="px-4 py-2">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        {track?.track?.name}
                        </span>
                    </td>
                    
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex items-center">
                        {track?.track?.artists[0].name}
                        </div>
                    </td>

                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">

                    {track?.track?.album?.name}
                    </div>
                </td>
            </tr>
            ))
        }
        </tbody>
    </table>
    
      )}
    </div>
  );
};
