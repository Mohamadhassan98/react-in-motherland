import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8SentIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg width='100%' height='100%' viewBox='0 0 48 48'>
                <Path fill='#90caf9' d='M3.759 42L3 29.058l1.012-5.018L3 19.027 4.012 6 45 23.958z' />
                <Path fill='#1976d2' d='M3 29.053l1.012-5.013L3 19.032l38.207 5.008z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8SentIcon;
