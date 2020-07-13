import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";
import useTheme from "../../src/values/theme";

function Icons8DoubleTickIcon({style}: SvgIconProps) {
    const theme = useTheme();
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path fill={theme.palette.primary.main} d='M45.172 9L22 32.342 12.831 23 10 25.854 22 38l26-26.208z' />
                <Path fill={theme.palette.primary.light} d='M35.172 9L12 32.342 2.831 23 0 25.854 12 38l26-26.208z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8DoubleTickIcon;
