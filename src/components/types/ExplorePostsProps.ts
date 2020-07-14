import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../values/Routing";

export interface ExplorePostsProps {
    navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}
