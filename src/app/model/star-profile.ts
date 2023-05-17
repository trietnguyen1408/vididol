import { Video } from './video';

/**
 * Keeping Star Profile Information
 */
export class StarProfile {
    id: number;
    userName: string;
    fullName: string;
    displayName: string;
    description: string;
    featureVideoUrl: string;
    price: number;
    isOfficial: boolean;
    listOfRequestedVideos: Video[];
    listOfSelfVideos: Video[];
}