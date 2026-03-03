export type Track = {
    id?: number;
    album_id?: number;
    number: number;
    title: string;
    lyrics: string | null;
    video: string | null;
};

export type Album = {
    id: number;
    title: string;
    artist: string;
    description: string;
    year: number;
    image: string;
    tracks?: Track[];
};