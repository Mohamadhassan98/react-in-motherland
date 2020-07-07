import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8PencilIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path
                    fill='#e57373'
                    d='M42.6 9.1L39 5.5c-.6-.6-1.5-.6-2 0l-1.7 1.7 5.7 5.7 1.7-1.7c.4-.7.4-1.6-.1-2.1'
                />
                <Path fill='#4caf50' d='M6.9 35.4L32.4 10l5.7 5.7-25.5 25.4-5.7-5.7z' />
                <Path fill='#388e3c' d='M8.7 37.18l25.95-25.95 2.122 2.12-25.95 25.952z' />
                <Path fill='#b0bec5' d='M40.9 12.8L38 15.6 32.4 10l2.8-2.8 5.7 5.6z' />
                <Path fill='#ffc107' d='M6.9 35.4L5 43l7.6-1.9-5.7-5.7z' />
                <Path fill='#37474f' d='M6 39.2L5 43l3.8-1L6 39.2z' />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8PencilIcon;
