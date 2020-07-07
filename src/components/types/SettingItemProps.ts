import React from "react";
import {GestureResponderEvent} from "react-native";

export interface SettingItemProps {
    scope: string;
    rightAdornment?: React.ReactElement;
    onClick?: (event: GestureResponderEvent) => void;
}
