import useTheme, {ThemeContextShape} from "../values/theme";
import {ImageStyle, TextStyle, ViewStyle} from "react-native";

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};
type input<T> = (palette: Omit<ThemeContextShape, "setPrimary" | "setSecondary">) => NamedStyles<T>;

export default function makeStyles<T extends NamedStyles<T> | NamedStyles<any>>(input: input<T>) {
    return () => {
        const anotherPalette = useTheme();
        return input(anotherPalette);
    };
}
