import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8VideoCameraIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path fill='#37474f' d='M27 8h10v4H27z' />
                <Path
                    fill='#607d8b'
                    d='M27 8h-9.7c-1.5 0-2.8.8-3.5 2.1l-3.3 6L14 18l3.3-6H27v7.2h4V12c0-2.2-1.8-4-4-4z'
                />
                <Path
                    fill='#607d8b'
                    d='M30 40H6c-2.2 0-4-1.8-4-4V20c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v16c0 2.2-1.8 4-4 4zm8-5l5 5h3V18h-3l-5 5v12z'
                />
                <Path
                    fill='#546e7a'
                    d='M22 35H8c-1.1 0-2-.9-2-2V23c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2z'
                />
                <Path fill='#455a64' d='M34 23h4v12h-4z' />
                <Path fill='#263238' d='M41 13h-4c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h4c1.7 0 3 1.3 3 3s-1.3 3-3 3z' />
                <Path fill='#03a9f4' d='M8 23h14v10H8z' />
                <Path fill='#4fc3f7' d='M13.5 25.5L9 32h9z' />
                <Path fill='#b3e5fc' d='M19.5 24a1.5 1.5 0 100 3 1.5 1.5 0 100-3zm-2 3.6L14 32h7z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8VideoCameraIcon;
