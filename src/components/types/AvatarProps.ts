import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../values/Routing";

export type AvatarProps = {
    size?: "small" | "medium" | "large" | "xlarge" | number;
    showAccessory?: boolean;
    onAccessoryPress?: () => void;
    local?: boolean;
    navigation?: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
    onPress?: () => void;
} & SimpleUser;

export interface SimpleUser {
    profileImage?: string;
    visibleName: string;
}
