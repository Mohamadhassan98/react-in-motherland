import {SimpleUser} from "./AvatarProps";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../values/Routing";

export interface PersonalUserInfoProps extends SimpleUser {
    posts: number;
    followings: number;
    followers: number;
    navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}
