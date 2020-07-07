import React from "react";
import {Path, Svg} from "react-native-svg";
import SvgIcon from "./SvgIcon";
import {SvgIconProps} from "./SvgIconProps";

function Icons8ForwardIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path fill='#2196f3' d='M17.1 5L14 8.1 29.9 24 14 39.9l3.1 3.1L36 24z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8ForwardIcon;
