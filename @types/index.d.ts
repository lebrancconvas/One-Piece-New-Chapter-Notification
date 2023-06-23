export interface OnePieceData {
    id:             string;
    title:          string;
    altTitles:      string[];
    description:    string;
    headerForImage: HeaderForImage;
    image:          string;
    genres:         string[];
    status:         string;
    views:          number;
    authors:        string[];
    chapters:       Chapter[];
}

export interface Chapter {
    id:           string;
    title:        string;
    views:        number;
    releasedDate: string;
}

export interface HeaderForImage {
    Referer: string;
}
