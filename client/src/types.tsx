export interface Record {
    id: number;
    album_name: string;
    artist_name: string;
    album_cover: string;
    condition: string;
    genre: string; 
    release_date: string;
    release_description: string;
    record_labels: string;
    spotify_link?: string;
    created_at: string;
    price: number; 
    user: User
}

export interface User {
    id?: number;
    username: string;
    password_digest: string;
    email: string;
    bio?: string;
    instagram_handle?: string;
    country?: string;
    avatar: string; 
}

export interface Comment {
    id: number;
    user_id: number;
    comment_content: string;
}

export interface Cart {
    id: number;
    user_id: number;
    record_id: number;
}

export interface Watch {
    id: number;
    user_id: number;
    record_id: number;
}

