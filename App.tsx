import "react-native-gesture-handler";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import getTheme from "./native-base-theme/components";
import {StyleProvider} from "native-base";
import useTheme, {ThemeProvider} from "./src/values/theme";
import platform from "./native-base-theme/variables/platform";
import ExplorePostsPage from "./src/pages/ExplorePostsPage";
import {RootStackParamList} from "./src/values/Routing";
import SearchInMessenger from "./src/pages/SearchInMessenger";
import addContact from "./src/pages/addContact";
import NewMessage from "./src/pages/NewMessage";
import MessengerPage from "./src/pages/MessengerPage";
import SearchInContacts from "./src/pages/SearchInContacts";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <ThemeProvider>
            <ThemeConsumer>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName='ExplorePostsPage'>
                        <Stack.Screen
                            name='Settings'
                            options={{
                                headerShown: false,
                            }}
                            component={NewMessage}
                        />
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
