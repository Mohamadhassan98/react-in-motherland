import React from "react";
import {Svg, G, Circle} from "react-native-svg";
import {SvgIconProps} from "./SvgIconProps";
import SvgIcon from "./SvgIcon";

function Dots({style}: SvgIconProps) {
    return (
        <SvgIcon style={style}>
            <Svg width='4.675' height='22.5' viewBox='0 0 4.675 22.5'>
                <G id='noun_dots_395569' transform='translate(-43.645 -19.417)'>
                    <Circle
                        id='Ellipse_137'
                        data-name='Ellipse 137'
                        cx='2.338'
                        cy='2.338'
                        r='2.338'
                        transform='translate(43.645 19.417)'
                        fill='#4c4c4c'
                    />
                    <Circle
                        id='Ellipse_138'
                        data-name='Ellipse 138'
                        cx='2.338'
                        cy='2.338'
                        r='2.338'
                        transform='translate(43.645 28.329)'
                        fill='#4c4c4c'
                    />
                    <Circle
                        id='Ellipse_139'
                        data-name='Ellipse 139'
                        cx='2.338'
                        cy='2.338'
                        r='2.338'
                        transform='translate(43.645 37.242)'
                        fill='#4c4c4c'
                    />
                </G>
            </Svg>
        </SvgIcon>
    );
}

export default Dots;
