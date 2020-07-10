import "react-native-gesture-handler";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import getTheme from "./native-base-theme/components";
import {StyleProvider} from "native-base";
import initStrings from "./src/values/strings";
import useTheme, {ThemeProvider} from "./src/values/theme";
import platform from "./native-base-theme/variables/platform";
import {TourGuideProvider} from "rn-tourguide";
import LanguageSettings from "./src/pages/LanguageSettings";
import EditProfile from "./src/pages/EditProfile";

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
                                component={EditProfile}
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
    initStrings(theme.localize.language);
    const rtl = getTheme(platform("fa") as any);
    const ltr = getTheme(platform("en") as any);
    return <StyleProvider style={theme.localize.language === "fa" ? rtl : ltr}>{children}</StyleProvider>;
};
