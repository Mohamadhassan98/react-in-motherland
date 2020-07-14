import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function AddUserMaleIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path fill='#ff9800' d='M24 37c-5 0-5-6-5-6v-6h10v6s0 6-5 6z' />
                <Path fill='#ffa726' d='M35 19a2 2 0 11-3.999.001A2 2 0 0135 19m-18 0a2 2 0 10-4 0 2 2 0 004 0' />
                <Path fill='#ffb74d' d='M33 13c0-7.635-18-4.971-18 0v7c0 4.971 4.028 9 9 9a9 9 0 009-9v-7z' />
                <Path
                    fill='#424242'
                    d='M24 4c-6.075 0-10 4.926-10 11v2.285L16 19v-5l12-4 4 4v5l2-1.742V15c0-4.025-1.038-8.016-6-9l-1-2h-3z'
                />
                <Path
                    fill='#784719'
                    d='M27 19a1.001 1.001 0 111 1c-.552 0-1-.449-1-1m-8 0a1.001 1.001 0 101-1c-.552 0-1 .449-1 1'
                />
                <Path fill='#4fc3f7' d='M29 31s-1 4-5 4-5-4-5-4S8 32.986 8 44h32c0-10.975-11-13-11-13' />
                <Path
                    fill='#01579b'
                    d='M24 37c5 0 6.745-3.93 6.95-5.428C29.794 31.148 29 31 29 31s-1 4-5 4-5-4-5-4-.795.145-1.952.566C17.252 33.061 19 37 24 37z'
                />
                <Path
                    fill='#43a047'
                    d='M46 38c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10s4.477-10 10-10c5.522 0 10 4.477 10 10'
                />
                <Path fill='#fff' d='M34 32h4v12h-4z' />
                <Path fill='#fff' d='M30 36h12v4H30z' />
            </Svg>
        </SvgIcon>
    );
}

export default AddUserMaleIcon;
