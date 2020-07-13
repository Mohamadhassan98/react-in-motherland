import "react-native-gesture-handler";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import getTheme from "./native-base-theme/components";
import {StyleProvider} from "native-base";
import useTheme, {ThemeProvider} from "./src/values/theme";
import platform from "./native-base-theme/variables/platform";
import {TourGuideProvider} from "rn-tourguide";

// pages
import NewPost from "./src/pages/NewPost";
import Notifications from "./src/pages/Notification";

const Stack = createStackNavigator<NavigationPages>();

export default function App() {
    return (
        <ThemeProvider>
            <ThemeConsumer>
                <TourGuideProvider>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName='Notifications'>
                            <Stack.Screen name='NewPost' component={NewPost} />
                            <Stack.Screen name='Notifications' component={Notifications} />
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
