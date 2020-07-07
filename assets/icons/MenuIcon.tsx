import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8MenuIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path fill='#607D8B' d='M6 22h36v4H6zm0-12h36v4H6zm0 24h36v4H6z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8MenuIcon;
