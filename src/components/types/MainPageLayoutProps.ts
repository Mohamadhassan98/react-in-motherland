import React from "react";
import {RootStackParamList} from "../../values/Routing";
import {StackNavigationProp} from "@react-navigation/stack";

export interface MainPageLayoutProps {
    children: React.ReactElement[];
    active: number;
    start?: () => void;
    copilotEvents?: {
        on: (handlerName: string, callback: (step?: number) => void) => void;
        off: (handlerName: string) => void;
    };
    navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}
