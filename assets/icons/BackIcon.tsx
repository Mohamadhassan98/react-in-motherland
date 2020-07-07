import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8BackIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path fill='#2196f3' d='M30.9 43l3.1-3.1L18.1 24 34 8.1 30.9 5 12 24z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8BackIcon;
