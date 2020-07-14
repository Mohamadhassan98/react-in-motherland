import {SimpleUser} from "./AvatarProps";

export interface PersonalUserInfoProps extends SimpleUser {
    posts: number;
    followings: number;
    followers: number;
}
