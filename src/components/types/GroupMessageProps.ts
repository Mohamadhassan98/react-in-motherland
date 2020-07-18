import {SimpleUser} from "./AvatarProps";

export interface GroupMessageProps extends SimpleUser {
    date: string;
    message: string;
    showDate?: boolean;
}

export function isGroupMessage(a: any): a is GroupMessageProps {
    return typeof a.visibleName !== "undefined";
}
