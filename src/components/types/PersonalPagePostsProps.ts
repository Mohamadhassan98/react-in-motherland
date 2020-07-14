import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../values/Routing";

export interface PersonalPagePostsProps {
    navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList> | undefined;
}
