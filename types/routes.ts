export interface MoviesForm {
    Title: string;
    Director: string;
    Year: number;
    Category: string;
    Link_image: string;
}

export interface Movies extends MoviesForm {
    id: number;
    created_at: string;
}