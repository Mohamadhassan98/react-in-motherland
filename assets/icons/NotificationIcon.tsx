import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function NotificationIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg width='100%' height='100%' viewBox='0 0 48 48'>
                <Path fill='#db8509' d='M24 34.001a4 4 0 100 8 4 4 0 100-8zM26 11a2 2 0 01-4 0V7a2 2 0 014 0v4z' />
                <Path
                    fill='#bc6f0a'
                    d='M27.887 38.91c.068-.293.113-.596.113-.909 0-.383-.07-.746-.172-1.097a76.536 76.536 0 01-7.657 0A3.98 3.98 0 0020 38.001c0 .313.045.616.113.909a83.788 83.788 0 007.774 0z'
                />
                <Path fill='#ffc107' d='M33 33V16.801a9 9 0 00-18 0V33h18z' />
                <Path fill='#ffc107' d='M41 33c0 2.209-7.059 4-17 4S7 35.209 7 33s7.059-4 17-4 17 1.791 17 4z' />
                <Path fill='#ffc107' d='M7 33c0-1.999 8-9.001 8-12s18-3.001 18 0 8 9.999 8 12-34 1.999-34 0z' />
                <Path
                    fill='#ffe082'
                    d='M9.275 29.424a33.719 33.719 0 00-1.295 1.65c1.622.655 8.15 3.062 16.562 3.062 4.746 0 10.089-.78 15.476-3.064a33.256 33.256 0 00-1.281-1.632c-13.038 5.284-26.039 1.24-29.462-.016z'
                />
            </Svg>
        </SvgIcon>
    );
}

export default NotificationIcon;
