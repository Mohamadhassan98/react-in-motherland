import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8CommercialIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path
                    fill='#90caf9'
                    d='M17.4 33H15v-4h4l.4 1.5c.3 1.3-.7 2.5-2 2.5zM37 36s-11.8-7-18-7V15c5.8 0 18-7 18-7v28z'
                />
                <Path fill='#283593' d='M9 17a5 5 0 100 10 5 5 0 100-10zm31 2h-3v6h3c1.7 0 3-1.3 3-3s-1.3-3-3-3z' />
                <Path
                    fill='#283593'
                    d='M18.6 41.2c-.9.6-2.5 1.2-4.6 1.4-.6.1-1.2-.3-1.4-1L8.2 27.9S17 21.7 17 29c0 5.5 1.5 8.4 2.2 9.5.5.7.5 1.6 0 2.3-.2.2-.4.3-.6.4z'
                />
                <Path fill='#3f51b5' d='M9 29h10V15H9c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2z' />
                <Path fill='#42a5f5' d='M38 38c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2s2 .9 2 2v28c0 1.1-.9 2-2 2z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8CommercialIcon;
