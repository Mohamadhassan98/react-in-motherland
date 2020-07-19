import {SimpleUser} from "./AvatarProps";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../values/Routing";

export interface FeedPostProps extends SimpleUser {
    datePublished: string;
    postMediaUri: string;
    postCaption: string;
    navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}
