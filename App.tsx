import "react-native-gesture-handler";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";
import {StyleProvider} from "native-base";
import initStrings from "./src/values/strings";
import Home from "./src/pages/Home";

const Stack = createStackNavigator();
initStrings();

export default function App() {
    return (
        <StyleProvider style={getTheme(material as any)}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='HomePage'
                        options={{
                            headerShown: false,
                        }}
                        component={Home}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </StyleProvider>
    );
}
