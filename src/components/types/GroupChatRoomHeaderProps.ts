import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../values/Routing";

export interface GroupChatRoomHeaderProps {
    groupImage?: string;
    groupName: string;
    members: number;
    onlineMembers: number;
    navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
    local?: boolean;
}
