import {ChangeColorSettingsProps} from "../pages/types/ChangeColorSettingsProps";
import {ChangeColorSimpleProps} from "../pages/types/ChangeColorSimpleProps";
import {EditProfileProps} from "../pages/types/EditProfileProps";
import {ExplorePostsPageProps} from "../pages/types/ExplorePostsPageProps";
import {ExploreSearchProps} from "../pages/types/ExploreSearchProps";
import {LanguageSettingsProps} from "../pages/types/LanguageSettingsProps";
import {PostPageProps} from "../pages/types/PostPageProps";
import {SettingsProps} from "../pages/types/SettingsProps";
import {StackNavigationProp} from "@react-navigation/stack";

export type RootStackParamList = {
    ChangeColorSettings: ChangeColorSettingsProps;
    ChangeColorSimple: ChangeColorSimpleProps;
    EditProfile: EditProfileProps;
    ExplorePostsPage: ExplorePostsPageProps;
    ExploreSearch: ExploreSearchProps;
    LanguageSettings: LanguageSettingsProps;
    PostPage: PostPageProps;
    Settings: SettingsProps;
};

export interface StackNavigator<T extends keyof RootStackParamList> {
    navigation: StackNavigationProp<RootStackParamList, T>;
}
