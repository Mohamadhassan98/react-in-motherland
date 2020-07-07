import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8CommentsIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg width='100%' height='100%' viewBox='0 0 48 48'>
                <Path fill='#673ab7' d='M39 6H9a3 3 0 00-3 3v33l8.556-8H39c1.656 0 3-1.344 3-3V9a3 3 0 00-3-3z' />
                <Path fill='#d1c4e9' d='M10 14h28v2H10zm0 5h28v2H10zm0 5h16v2H10z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8CommentsIcon;
