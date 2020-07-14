import "react-native-gesture-handler";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import getTheme from "./native-base-theme/components";
import {StyleProvider} from "native-base";
import useTheme, {ThemeProvider} from "./src/values/theme";
import platform from "./native-base-theme/variables/platform";
import ExplorePostsPage from "./src/pages/ExplorePostsPage";
import ChatRoom from "./src/pages/ChatRoom";
import LanguageSettings from "./src/pages/LanguageSettings";
import ConfirmCodeField from "./src/components/ConfirmCodeField";
import ConfirmCode from "./src/pages/ConfirmCode";

const Stack = createStackNavigator();

export default function App() {
    return (
        <ThemeProvider>
            <ThemeConsumer>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name='HomePage'
                            options={{
                                headerShown: false,
                            }}
                            component={ConfirmCodeField}
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
