import {ChangeColorSettingsProps} from "../pages/types/ChangeColorSettingsProps";
import {ChangeColorSimpleProps} from "../pages/types/ChangeColorSimpleProps";
import {EditProfileProps} from "../pages/types/EditProfileProps";
import {ExplorePostsPageProps} from "../pages/types/ExplorePostsPageProps";
import {ExploreSearchProps} from "../pages/types/ExploreSearchProps";
import {LanguageSettingsProps} from "../pages/types/LanguageSettingsProps";
import {PostPageProps} from "../pages/types/PostPageProps";
import {SettingsProps} from "../pages/types/SettingsProps";
import {StackScreenProps} from "@react-navigation/stack";
import {NewPostProps} from "../pages/types/NewPostProps";
import {NotificationsProps} from "../pages/types/NotificationsProps";
import {ProfileProps} from "../pages/types/ProfileProps";
import {HomeProps} from "../pages/types/HomeProps";
import {LoginProps} from "../pages/types/LoginProps";
import {AddContactProps} from "../pages/types/AddContactProps";
import {NewMessageProps} from "../pages/types/NewMessageProps";
import {MessengerPageProps} from "../pages/types/MessengerPageProps";

export type RootStackParamList = {
    ChangeColorSettings: ChangeColorSettingsProps;
    ChangeColorSimple: ChangeColorSimpleProps;
    EditProfile: EditProfileProps;
    ExplorePostsPage: ExplorePostsPageProps;
    ExploreSearch: ExploreSearchProps;
    LanguageSettings: LanguageSettingsProps;
    PostPage: PostPageProps;
    Settings: SettingsProps;
    NewPost: NewPostProps;
    Profile: ProfileProps;
    Notifications: NotificationsProps;
    Home: HomeProps;
    Login: LoginProps;
    AddContact: AddContactProps;
    NewMessage: NewMessageProps;
    MessengerPage: MessengerPageProps;
};

export type StackNavigator<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;
