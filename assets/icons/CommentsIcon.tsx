import React from "react";
import {Path, Svg} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Icons8CommentsIcon({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg width="100%" height="100%" viewBox="0 0 24 19.762">
                <Path id="Shape" d="M5.859,19.556,3.482,17.179A4.843,4.843,0,0,1,0,12.524v-7.6A4.927,4.927,0,0,1,4.922,0H19.078A4.928,4.928,0,0,1,24,4.922v7.531a4.928,4.928,0,0,1-4.922,4.922H9.034L6.854,19.556a.7.7,0,0,1-.995,0Z" fill="#161f3d"/>
            </Svg>
        </SvgIcon>
    );
}

export default Icons8CommentsIcon;
