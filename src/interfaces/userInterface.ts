export interface UserProfile {
    country: string;
    display_name: string;
    email: string;
    explicit_content: {
        filter_enabled: boolean,
        filter_locked: boolean
    },
    external_urls: { spotify: string; };
    followers: { href: string; total: number; };
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: string;
    uri: string;
}

export interface Image {
    url: string;
    height: number;
    width: number;
}

export interface Playlist {
    collaborative: boolean;
    description: string;
    external_urls: { spotify: string; };
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: Owner;
    primary_color: string;
    public: boolean;
    snapshot_id: string;
    tracks: Tracks;
    type: string;
    uri: string;
}

export interface Owner {
    display_name: string;
    external_urls: { spotify: string; };
    href: string;
    id: string;
    type: string;
    uri: string;
}


export interface Tracks {
    href: string;
    items: Item[];
    limit: number;
    next: string;
    offset: number;
    previous?: any;
    total: number;
}

export interface Item {
    added_at: Date;
    added_by: Addedby;
    is_local: boolean;
    primary_color?: any;
    track: Track;
    video_thumbnail?: any;
}

export interface Addedby {
    external_urls: { spotify: string; };
    href: string;
    id: string;
    type: string;
    uri: string;
}

export interface Track {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    episode?: boolean;
    explicit: boolean;
    external_ids: { isrc: string; };
    external_urls: { spotify: string; };
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track: boolean;
    track_number: number;
    type: string;
    uri: string;
}

export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: { spotify: string; };
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: Date;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export interface Artist {
    external_urls: { spotify: string; };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface Playlists {
    href: string;
    items: Item2[];
    limit: number;
    next: string;
    offset: number;
    previous?: any;
    total: number;
    is_contain?: boolean;
}

export interface Item2 {
    collaborative: boolean;
    description: string;
    external_urls: { spotify: string; };
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: Owner;
    primary_color?: any;
    public: boolean;
    snapshot_id: string;
    tracks: Tracks;
    type: string;
    uri: string;
}
