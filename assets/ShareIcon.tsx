import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8ShareIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path
                    fill='#1976D2'
                    d='M38.1 31.2L19.4 24l18.7-7.2c1.5-.6 2.3-2.3 1.7-3.9-.6-1.5-2.3-2.3-3.9-1.7l-26 10C8.8 21.6 8 22.8 8 24s.8 2.4 1.9 2.8l26 10c.4.1.7.2 1.1.2 1.2 0 2.3-.7 2.8-1.9.6-1.6-.2-3.3-1.7-3.9z'
                />
                <Path
                    fill='#1E88E5'
                    d='M11 17a7 7 0 100 14 7 7 0 100-14zM37 7a7 7 0 100 14 7 7 0 100-14zm0 20a7 7 0 100 14 7 7 0 100-14z'
                />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8ShareIcon;
