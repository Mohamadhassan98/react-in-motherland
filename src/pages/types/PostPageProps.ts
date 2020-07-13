import {SimpleUser} from "../../components/types/AvatarProps";

export type PostPageProps = {
    datePublished: string;
    postMediaUri: string;
    postCaption: string;
    likes: number;
    shares: number;
    comments: (SimpleUser & {datePublished: string})[];
} & SimpleUser;
