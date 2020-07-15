import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../values/Routing";

export interface ChatRoomHeadersProps {
    profileImage: string;
    profileUsername: string;
    status: "online" | "offline" | "lastSeen";
    navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}
