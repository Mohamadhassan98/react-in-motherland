import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8GoogleImagesIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg width='100%' height='100%' viewBox='0 0 48 48'>
                <Path fill='#03a9f4' d='M42 37a2 2 0 01-2 2H8a2 2 0 01-2-2V15a2 2 0 012-2h32a2 2 0 012 2v22z' />
                <Path fill='#03a9f4' d='M33 16a2 2 0 01-2 2H17a2 2 0 01-2-2v-5a2 2 0 012-2h14a2 2 0 012 2v5z' />
                <Path fill='#fff' d='M37 16a2 2 0 100 4 2 2 0 100-4z' />
                <Path fill='#b3e5fc' d='M24 16a10 10 0 100 20 10 10 0 100-20z' />
                <Path fill='#01579b' d='M24 18a8 8 0 100 16 8 8 0 100-16z' />
                <Path
                    fill='#0277bd'
                    d='M20 30c0 1.173.259 2.284.712 3.287A7.957 7.957 0 0024 34a8 8 0 008-8 7.949 7.949 0 00-.713-3.287A7.949 7.949 0 0028 22a8 8 0 00-8 8z'
                />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8GoogleImagesIcon;
