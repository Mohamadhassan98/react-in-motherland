declare module "react-native-color-palette" {
    import {TextStyle, ViewStyle} from "react-native";
    import {Icon} from "expo/build/globals.web";

    export interface ColorPaletteProps {
        onChange?: (color: string) => void;
        colors: string[];
        defaultColor?: string;
        value?: string;
        paletteStyles?: ViewStyle;
        title?: string;
        titleStyles?: TextStyle;
        icon: Text | Icon;
        scaleToWindow?: boolean;
    }
    export default class ColorPalette extends React.Component<ColorPaletteProps, any> {}
}
