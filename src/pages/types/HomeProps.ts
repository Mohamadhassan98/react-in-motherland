import {SimpleUser} from "../../components/types/AvatarProps";

export type HomeProps = {
    bio: string;
    posts: number;
    followings: number;
    followers: number;
    you?: boolean;
} & SimpleUser;
