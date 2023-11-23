import axios from "axios";
import { Playlist, Playlists, UserProfile } from "../interfaces/userInterface";

//get spotify user profil

const saveTrack: string[] = [
    '0S4dVpqBLnBFj4wdB4UDMd', '1TfqLAPs4K3s2rJMoCokcS', 
    '2m0M7YqCy4lXfedh18qd8N', '2UC5XnHA1Wn9FjQmbjNca9', '53NWOfQXdEmbHqg5FGeXlG', 
    '6qfjUmIxPluNISxBgJfvM3', '2WfaOiMkCvy7F5fcp2zZ8L', '1ofu2qOdm9LN8TGXd003Kj', 
    '459EpH5UZgE6fMNPMLOgMF', '4jqCold0GXW9c40QyOGD8S', '7nWMVmzfodNQ5Ezj29yJ3S', 
    '7fjcn8o8kZuPBW2WvFxXVQ', '05OmZz1tixVBtXMx3cb4oc', '2IJftBfq7pJ43tfnOR0RB3', 
    '5vdp5UmvTsnMEMESIF2Ym7', '7J1uxwnxfQLu4APicE5Rnj', '0cGG2EouYCEEC3xfa0tDFV',
    '7MFWYTlrC81IGpb0Jwgdu7', '3NYCaxkggl0Hh8vQptSUvV', '3LCup59DMpM3r6fwQsZMYs',
    '0odIT9B9BvOCnXfS0e4lB5', '6TPAhgpBvhMIDUzmDnWJmj', '030RDC2ayPOUM32F9IH7eE',
    '1jDJFeK9x3OZboIAHsY9k2', '7jwQlYGpOml9ETGre1HqGA', '5TpIQ1tVlPnm4SHObswUU6', 
    '1JSTJqkT5qHq8MDJnJbRE1', '7p5Na4GvFzP6M7i1ti2YRJ', '62GYoGszQfROZswLee6W3O', 
    '2i353bK8WrQbJ3wfR6IYWm', '1PtQJZVZIdWIYdARpZRDFO', '0ikz6tENMONtK6qGkOrU3c', 
    '7j74lucZ59vqN67Ipe2ZcY', '6tgOsCso6nMCRg5EtgixZ2', '4YR6Dextuoc3I8nJ0XgzKI',
    '4SHIlbYaTolnXdAFAcHGY7', '6NSqiyQWIyZLouviktad9X'
]


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

    //
    checkSavedTracks: async (token: string, trackIds: string[]) => {
        trackIds = saveTrack;
        const url = "https://api.spotify.com/v1/me/tracks/contains";
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        const params = {
            ids: trackIds.join(","),
        };

        try {
            const { data } = await axios.get(url, { headers, params });
            return data;
        } catch (error) {
            console.error("Error checking saved tracks:", error);
            throw error; // You can handle or log the error as needed

        }
    },

    checkSavedForOneTracks: async (token: string, trackId: string) => {
        const url = "https://api.spotify.com/v1/me/tracks/contains";
        const headers = {
            Authorization: `Bearer ${token}`,
        }; 
        // give the rest 
        const params = {
            ids: trackId,
        };
        try {
            const { data } = await axios.get(url, { headers, params });
            return data;
        } catch (error) {
            console.error("Error checking saved tracks:", error);
            throw error; // You can handle or log the error as needed

        }
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