import axios from "axios";
import { Playlist, Playlists, UserProfile } from "../interfaces/userInterface";

//get spotify user profil

export const spotifyService = {

    getUserProfile: async (token: string): Promise<UserProfile> => {
        const url = "https://api.spotify.com/v1/me";
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const { data } = await axios.get(url, { headers });
        return data;
    },

    likeTrack: async (token: string, trackId: any) => {
        const url = "https://api.spotify.com/v1/me/tracks";
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const body = JSON.stringify({ ids: [trackId] });
        const { data } = await axios.put(url, body, { headers });
        return data;
    },

    unlikeTrack: async (token: string, trackId: any) => {
        const url = "https://api.spotify.com/v1/me/tracks";
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const body = JSON.stringify({ ids: [trackId] });
        const { data } = await axios.delete(url, { headers, data: body });
        return data;
    },

    getUserPlaylist: async (token: string): Promise<Playlists> => {
        const url = "https://api.spotify.com/v1/playlists/37i9dQZF1DWWl7MndYYxge/tracks";
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const {data}  = await axios.get(url, { headers });
        return data;
    },

    addPlaylist: async (token: string, playlistId: string) => {
        const url = `https://api.spotify.com/v1/playlists/${playlistId}/followers`;
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const { data } = await axios.put(url, {}, { headers });
        return data;
    },

    getUserLikedTracks: async (token: string) => {
        const url = "https://api.spotify.com/v1/me/tracks";
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const { data } = await axios.get(url, { headers });
        return data;
    },
}