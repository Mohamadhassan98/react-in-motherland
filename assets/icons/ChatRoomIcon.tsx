import React from "react";
import {Path, Svg} from "react-native-svg";
import SvgIcon from "./SvgIcon";
import {SvgIconProps} from "./SvgIconProps";

function Icons8ChatRoomIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path fill='#1565c0' d='M38 5H15a5 5 0 00-5 5v27l6.965-7H38a5 5 0 005-5V10a5 5 0 00-5-5z' />
                <Path fill='#2196f3' d='M33 11H10a5 5 0 00-5 5v27l6.965-7H33a5 5 0 005-5V16a5 5 0 00-5-5z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8ChatRoomIcon;
