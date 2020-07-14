import React from "react";
import {Path, Svg} from "react-native-svg";
import SvgIcon from "./SvgIcon";
import {SvgIconProps} from "./SvgIconProps";

function DeleteIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path fill='#F44336' d='M36.021 8.444l3.536 3.536L11.98 39.557 8.443 36.02z' />
                <Path fill='#F44336' d='M39.555 36.023l-3.536 3.535L8.445 11.976l3.536-3.535z' />
            </Svg>
        </SvgIcon>
    );
}

export default DeleteIcon;
