export interface Video {
    age: number;
    region: string;
    date: string;
}


export interface VideoListType {
        title: string;
        author: string;
        id: string;
        viewDetails: Video[];
}