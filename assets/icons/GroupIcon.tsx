import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8GroupIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path
                    fill='#cfd8dc'
                    d='M45 39H23v-3s3.044-7 11-7c7.955 0 11 7 11 7v3zM34 26a6 6 0 100-12 6 6 0 000 12'
                />
                <Path fill='#ffb74d' d='M24 16a7 7 0 01-7 7c-3.867 0-7-3.133-7-7s3.133-7 7-7a7 7 0 017 7' />
                <Path fill='#546e7a' d='M31 35s-3.875-9-14-9C6.874 26 3 35 3 35v4h28v-4z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8GroupIcon;
