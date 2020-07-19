import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../values/Routing";

export interface ChannelMessageProps {
    date: string;
    message?: string;
    media?: string;
    profileImage: string;
    profileUsername: string;
    isLiked: boolean;
    navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
    route: {name: string};
}
