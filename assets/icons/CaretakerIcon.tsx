import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8CaretakerIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg width='100%' height='100%' viewBox='0 0 48 48'>
                <Path fill='#e8eaf6' d='M41 42H17V26.21l12.538-8.823L41 25.862V42z' />
                <Path fill='#b71c1c' d='M43 29.25l-13.5-9.036L16 29.25V24l13.5-9L43 24v5.25z' />
                <Path fill='#c5cae9' d='M17 38h24v4H17z' />
                <Path fill='#d84315' d='M30 32h7v10h-7z' />
                <Path fill='#01579b' d='M22 28h5v5h-5z' />
                <Path fill='#ffb74d' d='M13 16c-2.758 0-5-2.243-5-5s2.242-5 5-5 5 2.243 5 5-2.242 5-5 5' />
                <Path fill='#607d8b' d='M8.429 42h9.143L18 36l3-2v-8a8 8 0 00-16 0v8l3 2 .429 6z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8CaretakerIcon;
