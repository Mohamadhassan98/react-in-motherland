import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8PlusMathIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg width='100%' height='100%' viewBox='0 0 48 48'>
                <Path fill='#9c27b0' d='M21 6h5v35h-5z' />
                <Path fill='#9c27b0' d='M6 21h35v5H6z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8PlusMathIcon;
