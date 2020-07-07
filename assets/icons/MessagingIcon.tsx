import React from "react";
import {G, Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8MessagingIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 36 36' width='100%' height='100%'>
                <G data-name='Ð¡Ð»Ð¾Ð¹ 2'>
                    <Path fill='#1565c0' d='M14 30h16l6 6V14a4 4 0 00-4-4H14a4 4 0 00-4 4v12a4 4 0 004 4' />
                    <Path fill='#2196f3' d='M23 20H6l-6 6V4a4 4 0 014-4h19a4 4 0 014 4v12a4 4 0 01-4 4' />
                    <Path fill='#e3f2fd' d='M4 4h19v2H4zM4 9h19v2H4zM4 14h10v2H4z' />
                </G>
            </Svg>
        </SvgIcon>
    );
}

export default Icons8MessagingIcon;
