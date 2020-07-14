import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import getTheme from "./native-base-theme/components";
import {StyleProvider} from "native-base";
import useTheme, {ThemeProvider} from "./src/values/theme";
import platform from "./native-base-theme/variables/platform";
import {RootStackParamList} from "./src/values/Routing";
import ExploreSearch from "./src/pages/ExploreSearch";
import ExplorePostsPage from "./src/pages/ExplorePostsPage";
import Settings from "./src/pages/Settings";
import LanguageSettings from "./src/pages/LanguageSettings";
import ChangeColorSettings from "./src/pages/ChangeColorSettings";
import ChangeColorSimple from "./src/pages/ChangeColorSimple";
import PostPage from "./src/pages/PostPage";
import Home from "./src/pages/Home";
import {t} from "i18n-js";
import EditProfile from "./src/pages/EditProfile";
import Login from "./src/pages/Login";
import addContact from "./src/pages/addContact";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <ThemeProvider>
            <ThemeConsumer>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName='AddContact'
                        screenOptions={{headerShown: false, gestureDirection: "horizontal"}}
                    >
                        <Stack.Screen name='ExploreSearch' component={ExploreSearch} />
                        <Stack.Screen name='ExplorePostsPage' component={ExplorePostsPage} />
                        <Stack.Screen name='Settings' component={Settings} />
                        <Stack.Screen name='LanguageSettings' component={LanguageSettings} />
                        <Stack.Screen name='ChangeColorSettings' component={ChangeColorSettings} />
                        <Stack.Screen name='ChangeColorSimple' component={ChangeColorSimple} />
                        <Stack.Screen name='Login' component={Login} />
                        <Stack.Screen name='AddContact' component={addContact} />
                        <Stack.Screen
                            name='PostPage'
                            component={PostPage}
                            initialParams={{
                                shares: 123,
                                likes: 321,
                                visibleName: "Donald trump",
                                profileImage: undefined,
                                datePublished: t("_tenMinutesAgo"),
                                postCaption: "data scientist jobs",
                                postMediaUri:
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/368px-Donald_Trump_official_portrait.jpg",
                                comments: new Array(5).fill({
                                    body: "Please delay the project deadline.",
                                    datePublished: t("_3MinutesAgo"),
                                    profileImage:
                                        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                                    visibleName: "Amir reza",
                                }),
                            }}
                        />
                        <Stack.Screen name='Home' component={Home} />
                        <Stack.Screen name='EditProfile' component={EditProfile} />
                    </Stack.Navigator>
                </NavigationContainer>
            </ThemeConsumer>
        </ThemeProvider>
    );
}

const ThemeConsumer = ({children}: {children: React.ReactElement}) => {
    const theme = useTheme();
    return <StyleProvider style={getTheme(platform(theme.localize.language) as any)}>{children}</StyleProvider>;
};
