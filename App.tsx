import "react-native-gesture-handler";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./src/pages/Home";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";
import {StyleProvider} from "native-base";
import initStrings from "./src/values/strings";

const Stack = createStackNavigator();
initStrings();

export default function App() {
    return (
        <StyleProvider style={getTheme(material as any)}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Home' component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </StyleProvider>
    );
}
