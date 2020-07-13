import React from "react";
import {Path, Svg} from "react-native-svg";
import SvgIcon from "./SvgIcon";
import {SvgIconProps} from "./SvgIconProps";

function LoveOutline({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg width='100%' height='100%' viewBox='0 0 45 37'>
                <Path
                    d='M32.5.5a11.986 11.986 0 00-10 5.372C20.351 2.637 16.676.5 12.5.5 5.873.5.5 5.873.5 12.5c0 11.943 22 24 22 24s22-11.955 22-24c0-6.627-5.373-12-12-12'
                    fill='none'
                    stroke='#F44336'
                />
            </Svg>
        </SvgIcon>
    );
}

export default LoveOutline;
