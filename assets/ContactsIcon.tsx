import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8ContactsIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path fill='#FF7043' d='M38 44H12V4h26c2.2 0 4 1.8 4 4v32c0 2.2-1.8 4-4 4z' />
                <Path fill='#BF360C' d='M10 4h2v40h-2c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4z' />
                <Path fill='#AB300B' d='M26 16a4 4 0 100 8 4 4 0 100-8zm7 14s-1.9-4-7-4-7 4-7 4v2h14v-2z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8ContactsIcon;
