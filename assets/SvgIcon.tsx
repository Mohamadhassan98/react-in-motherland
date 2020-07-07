import React from "react";
import {SvgIconProps} from "./SvgIconProps";
import {SvgProps} from "react-native-svg";
import {View} from "native-base";

export default function ({style, children}: SvgIconProps & {children: React.ReactElement<SvgProps>}) {
    const customStyle = {
        width: style?.width || 24,
        height: style?.height || 24,
        ...style,
    };
    return <View style={customStyle}>{children}</View>;
}
