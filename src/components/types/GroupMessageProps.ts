import {SimpleUser} from "./AvatarProps";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../values/Routing";

export interface GroupMessageProps extends SimpleUser {
    date: string;
    message: string;
    showDate?: boolean;
    navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}

export function isGroupMessage(a: any): a is GroupMessageProps {
    return typeof a.visibleName !== "undefined";
}
