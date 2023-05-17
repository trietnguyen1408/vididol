import { StarProfile } from '../model/star-profile';

/**
 * TO-DO: Make the data more real, thumbnail for videos, comments object missing
 */

export const MOCK_STARPROFILE: StarProfile = {
    id: 1,
    userName: "hoailinh",
    fullName: "Hoài Linh",
    displayName: "Hoài Linh",
    price: 490000,
    isOfficial: true,
    description: "Hoài Linh tên đầy đủ là Võ Nguyễn Hoài Linh (sinh ngày 18 tháng 12 năm 1969) là một diễn viên hài kịch người Việt Nam. Hoài Linh là danh hài đạt được nhiều giải thưởng như Cù Nèo Vàng, Mai Vàng,... được phong danh hiệu Nghệ sĩ Ưu tú năm 2015 và là nghệ sĩ hải ngoại đầu tiên được phong tặng danh hiệu này.",
    featureVideoUrl: "https://www.youtube.com/embed/fa3Wy6kryuI?controls=0",
    listOfRequestedVideos: [
        {
            id: 1,
            numberOfLikes: 3,
            isRequested: true,
            title: "Tặng cho Nguyễn Văn A",
            subtitle: "Quà tặng từ bố mẹ",
            description: "Abc",
            thumbnail: "./assets/images/userAvatar/1/GridSentToFan/sent-to-fan.jpg",
            createdDate: new Date("2019-01-16"),
            lastModifiedDate: new Date("2019-01-16")
        },
        {
            id: 2,
            numberOfLikes: 6,
            isRequested: true,
            title: "Tặng cho Nguyễn Văn A",
            subtitle: "Quà tặng từ bố mẹ",
            thumbnail: "./assets/images/userAvatar/1/GridSentToFan/sent-to-fan.jpg",
            description: "Abc",
            createdDate: new Date("2019-01-16"),
            lastModifiedDate: new Date("2019-01-16")
        },
        {
            id: 3,
            numberOfLikes: 1,
            isRequested: true,
            title: "Tặng cho Nguyễn Văn A",
            subtitle: "Quà tặng từ bố mẹ",
            thumbnail: "./assets/images/userAvatar/1/GridSentToFan/sent-to-fan.jpg",
            description: "Abc",
            createdDate: new Date("2019-01-16"),
            lastModifiedDate: new Date("2019-01-16")
        },
        {
            id: 4,
            numberOfLikes: 2,
            isRequested: true,
            title: "Tặng cho Nguyễn Văn A",
            subtitle: "Quà tặng từ bố mẹ",
            thumbnail: "./assets/images/userAvatar/1/GridSentToFan/sent-to-fan.jpg",
            description: "Abc",
            createdDate: new Date("2019-01-16"),
            lastModifiedDate: new Date("2019-01-16")
        },
        {
            id: 5,
            numberOfLikes: 9,
            isRequested: true,
            title: "Tặng cho Nguyễn Văn A",
            subtitle: "Quà tặng từ bố mẹ",
            thumbnail: "./assets/images/userAvatar/1/GridSentToFan/sent-to-fan.jpg",
            description: "Abc",
            createdDate: new Date("2019-01-16"),
            lastModifiedDate: new Date("2019-01-16")
        }
    ],



    listOfSelfVideos: [
        {
            id: 1,
            numberOfLikes: 3,
            isRequested: false,
            title: "Mình đẹp trai vcoz",
            subtitle: "Abc",
            thumbnail: "./assets/images/userAvatar/1/GridPersonal/personal.jpg",
            description: "Abc",
            createdDate: new Date("2019-01-16"),
            lastModifiedDate: new Date("2019-01-16")
        },
        {
            id: 2,
            numberOfLikes: 2,
            isRequested: false,
            title: "Mình đẹp trai vcoz",
            subtitle: "Abc",
            thumbnail: "./assets/images/userAvatar/1/GridPersonal/personal.jpg",
            description: "Abc",
            createdDate: new Date("2019-01-16"),
            lastModifiedDate: new Date("2019-01-16")
        },
        {
            id: 3,
            numberOfLikes: 10,
            isRequested: false,
            title: "Mình đẹp trai vcoz",
            subtitle: "Abc",
            thumbnail: "./assets/images/userAvatar/1/GridPersonal/personal.jpg",
            description: "Abc",
            createdDate: new Date("2019-01-16"),
            lastModifiedDate: new Date("2019-01-16")
        }
    ],
}