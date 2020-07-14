import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";
import useTheme from "../../src/values/theme";

function Icons8CheckmarkIcon({style, fill}: SvgIconProps) {
    const theme = useTheme();
    return (
        <SvgIcon style={style}>
            <Svg viewBox='0 0 48 48' width='100%' height='100%'>
                <Path
                    fill={fill || theme.palette.primary.main}
                    d='M40.6 12.1L17 35.7l-9.6-9.6L4.6 29 17 41.3l26.4-26.4z'
                />
            </Svg>
        </SvgIcon>
    );
}

export default Icons8CheckmarkIcon;
