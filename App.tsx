import "react-native-gesture-handler";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import getTheme from "./native-base-theme/components";
import {StyleProvider} from "native-base";
import initStrings from "./src/values/strings";
import {ThemeProvider} from "./src/values/theme";
import platform from "./native-base-theme/variables/platform";
import ExplorePostsPage from "./src/pages/ExplorePostsPage";
import {TourGuideProvider} from "rn-tourguide";

const Stack = createStackNavigator();
initStrings();

export default function App() {
    return (
        <StyleProvider style={getTheme(platform as any)}>
            <ThemeProvider>
                <TourGuideProvider>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen
                                name='HomePage'
                                options={{
                                    headerShown: false,
                                }}
                                component={ExplorePostsPage}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </TourGuideProvider>
            </ThemeProvider>
        </StyleProvider>
    );
}
