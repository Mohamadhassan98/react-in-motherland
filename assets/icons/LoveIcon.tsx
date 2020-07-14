import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8LoveIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg width='100%' height='100%' viewBox='0 0 48 48'>
                <Path
                    fill='#161F3D'
                    d='M34 6a11.986 11.986 0 00-10 5.372C21.851 8.137 18.176 6 14 6 7.373 6 2 11.373 2 18c0 11.943 22 24 22 24s22-11.955 22-24c0-6.627-5.373-12-12-12'
                />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8LoveIcon;
