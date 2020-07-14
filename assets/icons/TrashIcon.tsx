import React from "react";
import {Path, Svg} from "react-native-svg";
import SvgIcon from "./SvgIcon";
import {SvgIconProps} from "./SvgIconProps";

function TrashIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path fill='#9575CD' d='M34 12l-6-6h-8l-6 6h-3v28c0 2.2 1.8 4 4 4h18c2.2 0 4-1.8 4-4V12h-3z' />
                <Path
                    fill='#7454B3'
                    d='M24.5 39h-1c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v19c0 .8-.7 1.5-1.5 1.5zm7 0c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v19c0 .8-.7 1.5-1.5 1.5zm-15 0c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v19c0 .8-.7 1.5-1.5 1.5z'
                />
                <Path fill='#B39DDB' d='M11 8h26c1.1 0 2 .9 2 2v2H9v-2c0-1.1.9-2 2-2z' />
            </Svg>
        </SvgIcon>
    );
}

export default TrashIcon;
