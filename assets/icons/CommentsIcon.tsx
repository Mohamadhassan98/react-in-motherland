import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8CommentsIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg width='100%' height='100%' viewBox='0 0 48 48'>
                <Path
                    fill='#673ab7'
                    d='M39,6H9C7.343,6,6,7.343,6,9v33l8.556-8H39c1.656,0,3-1.344,3-3V9C42,7.343,40.656,6,39,6z'
                />
                <Path fill='#d1c4e9' d='M10 14H38V16H10zM10 19H38V21H10zM10 24H26V26H10z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8CommentsIcon;
