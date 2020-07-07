import React from "react";
import {Path, Svg} from "react-native-svg";
import SvgIcon from "./SvgIcon";
import {SvgIconProps} from "./SvgIconProps";

function Icons8CameraIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path fill='#512da8' d='M33.9 12.1H14.2L17.6 7c.4-.6 1-.9 1.7-.9h9.6c.7 0 1.3.3 1.7.9l3.3 5.1z' />
                <Path fill='#8667c4' d='M14 11H8V9.2C8 8.5 8.5 8 9.2 8h3.6c.7 0 1.2.5 1.2 1.2V11z' />
                <Path
                    fill='#5e35b1'
                    d='M40 42H8c-2.2 0-4-1.8-4-4V14c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4z'
                />
                <Path fill='#512da8' d='M24 14a12 12 0 100 24 12 12 0 100-24z' />
                <Path fill='#b388ff' d='M24 17a9 9 0 100 18 9 9 0 100-18z' />
                <Path
                    fill='#c7a7ff'
                    d='M29 23c-1.2-1.4-3-2.2-4.8-2.2-1.8 0-3.6.8-4.8 2.2-.5.5-.4 1.3.1 1.8s1.3.4 1.8-.1c1.5-1.7 4.3-1.7 5.8 0 .3.3.6.4 1 .4.3 0 .6-.1.9-.3.4-.4.5-1.3 0-1.8z'
                />
                <Path fill='#8667c4' d='M11 12a2 1.5 0 100 3 2 1.5 0 100-3z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8CameraIcon;
