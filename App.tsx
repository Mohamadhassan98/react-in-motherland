import "react-native-gesture-handler";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import getTheme from "./native-base-theme/components";
import {StyleProvider} from "native-base";
import initStrings from "./src/values/strings";
import {ThemeProvider} from "./src/values/theme";
import platform from "./native-base-theme/variables/platform";
import {TourGuideProvider} from "rn-tourguide";
import Test from "./src/components/Test";
import InputBoxEditProfile from "./src/components/InputBoxEditProfile";
import EditProfile from "./src/pages/EditProfile";

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
                                component={EditProfile}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </TourGuideProvider>
            </ThemeProvider>
        </StyleProvider>
    );
}
