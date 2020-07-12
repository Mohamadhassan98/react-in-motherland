import {SimpleUser} from "./AvatarProps";

export type CommentProps = {
    body: string;
    datePublished: string;
} & SimpleUser;
