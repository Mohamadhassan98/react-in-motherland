import React from "react";
import {G, Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8TelescopeIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path fill='#455a64' d='M26 29h2v14h-2z' />
                <Path fill='#455a64' d='M34 42h-2l-6-8h2z' />
                <Path fill='#455a64' d='M20 42h2l6-8h-2z' />
                <Path
                    fill='#607d8b'
                    d='M27 30c-1.7 0-3-1.3-3-3v-4h6v4c0 1.7-1.3 3-3 3zM10.45 30.768l-1.781.91-3.64-7.125 1.782-.91zM24 32h6v2h-6z'
                />
                <Path fill='#90caf9' d='M36.174 6.364a6 2 62.943 105.459 10.687 6 2 62.943 10-5.459-10.687z' />
                <G fill='#455a64'>
                    <Path d='M43.008 17.464l-1.78.91-6.37-12.468 1.782-.91zM22.933 26.615l-1.78.91-5.46-10.687 1.782-.91zM14.473 27.597l-4.453 2.275-2.73-5.344 4.453-2.274z' />
                </G>
                <G fill='#2196f3'>
                    <Path d='M40.758 17.5l-17.811 9.098-5.459-10.687L35.3 6.814zM15.8 28l4.5-2.3-3.6-7.1-4.5 2.3c-.5.3-.7.9-.4 1.3l2.7 5.3c.2.6.8.8 1.3.5z' />
                </G>
                <Path fill='#cfd8dc' d='M27 26a1 1 0 100 2 1 1 0 100-2z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8TelescopeIcon;
