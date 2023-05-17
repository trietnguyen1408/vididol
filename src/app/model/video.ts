/**
 * Keeping Video Information
 */
export class Video {
    id: number;
    numberOfLikes: number;
    isRequested: boolean;
    title: string;
    subtitle: string;
    thumbnail: string;
    description: string;
    createdDate: Date;
    lastModifiedDate: Date;
}