// Album component
import { useState, useEffect } from "react";

export const AlbumComponent = ({ data } : { data: Object[] }) => {
    const [albums, setAlbums] = useState(data);
    return (
        <div>
            <h1>Albums</h1>
            <ul>
                {
                    albums.map((album: any) => (
                        <li>
                            {album?.titre} - {album?.artiste} - {album?.date}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}