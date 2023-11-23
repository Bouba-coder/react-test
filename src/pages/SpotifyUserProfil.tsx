import React from "react";
import { useState, useEffect } from "react";
import { UserProfile } from "../interfaces/userInterface";


export const SpotifyUserProfile = (user: UserProfile) => {
    const [userProfile, setUserProfile] = useState<UserProfile>();

    useEffect(() => {
        setUserProfile(user);
    }, [user]);


    return (
        <div 
            className="bg-white shadow overflow-hidden sm:rounded-lg m-2"
            style={{width: "400px", height: "200px"}}
        >
            {user && 
            (
            <ul role="list" className="divide-y divide-gray-100">                    
                    <div>
                        <img className="m-4 h-22 w-22 flex-none rounded-full bg-gray-50" src={userProfile?.images[0].url} alt="" />
                        <h3 className="text-sm font-semibold leading-6 text-gray-600">Profile</h3>
                    </div>
                <li  className="flex justify-between gap-x-6 py-5">

                    <div className="flex min-w-0 gap-x-4">
                        
                        <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">

                           Name : {userProfile?.display_name}
                        </p>
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                            Email :
                            {userProfile?.email}
                        </p>

                        <p className="text-sm font-semibold leading-6 text-gray-900">
                            Country :
                            {userProfile?.country}
                        </p>
                        </div>
                    </div>
                </li>
            </ul>
            )}
        </div>
    );
    
}



