import useTheme, {Font, Localize, Palette} from "../values/theme";
import {ImageStyle, TextStyle, ViewStyle} from "react-native";

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

type paletteInput = Omit<Palette, "setPrimary" | "setSecondary">;

type localizationInput = Omit<Localize, "setLanguage">;

type fontInput = Font;

type input<T> = (theme: {palette: paletteInput; localize: localizationInput; font: fontInput}) => NamedStyles<T> | T;

export default function makeStyles<T extends NamedStyles<T> | NamedStyles<any>>(input: input<T>): () => T {
    return () => {
        const theme = useTheme();
        return input(theme) as T;
    };
}
