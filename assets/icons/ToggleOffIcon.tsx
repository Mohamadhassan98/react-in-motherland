import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8ToggleOffIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='-281 373 48 48' width='100%' height='100%'>
                <Path
                    fill='#ff3d00'
                    d='M-270 408h26c6 0 11-4.9 11-11 0-6-4.9-11-11-11h-26c-6 0-11 4.9-11 11s4.9 11 11 11z'
                />
                <Path fill='#c5cae9' d='M-269 385a12 12 0 100 24 12 12 0 100-24z' />
                <Path
                    fill='#dd2c00'
                    d='M-257 397c0 4.9-3 9.2-7.2 11h6.8c2.7-2.9 4.4-6.7 4.4-11s-1.7-8.1-4.4-11h-6.8c4.2 1.8 7.2 6.1 7.2 11z'
                />
                <Path
                    fill='#9fa8da'
                    d='M-269 387c-5.5 0-10 4.5-10 10 0 1.2.2 2.3.6 3.3l9.4-3.3 4.5-8.9c-1.4-.7-2.9-1.1-4.5-1.1zm0 20c5.5 0 10-4.5 10-10 0-1.2-.2-2.3-.6-3.3l-9.4 3.3-4.5 8.9c1.4.7 2.9 1.1 4.5 1.1z'
                />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8ToggleOffIcon;
