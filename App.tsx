import "react-native-gesture-handler";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import getTheme from "./native-base-theme/components";
import {StyleProvider} from "native-base";
import useTheme, {ThemeProvider} from "./src/values/theme";
import platform from "./native-base-theme/variables/platform";
import {TourGuideProvider} from "rn-tourguide";
import LanguageSettings from "./src/pages/LanguageSettings";
import ExplorePostsPage from "./src/pages/ExplorePostsPage";
import EditProfile from "./src/pages/EditProfile";
import LoginPage from "./src/pages/Login";
import ChatRoom from "./src/pages/ChatRoom";
import Message from "./src/components/Message";
import Login from "./src/pages/Login";

const Stack = createStackNavigator();

export default function App() {
    return (
        <ThemeProvider>
            <ThemeConsumer>
                <TourGuideProvider>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen
                                name='HomePage'
                                options={{
                                    headerShown: false,
                                }}
                                component={ChatRoom}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </TourGuideProvider>
            </ThemeConsumer>
        </ThemeProvider>
    );
}

const ThemeConsumer = ({children}: {children: React.ReactElement}) => {
    const theme = useTheme();
    return <StyleProvider style={getTheme(platform(theme.localize.language) as any)}>{children}</StyleProvider>;
};
