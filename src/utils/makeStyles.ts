import useTheme, {Palette, ThemeContextShape} from "../values/theme";
import {ImageStyle, TextStyle, ViewStyle} from "react-native";

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};
type input<T> = (
    theme: Omit<ThemeContextShape, "palette"> & {palette: Omit<Palette, "setPrimary" | "setSecondary">}
) => NamedStyles<T>;

export default function makeStyles<T extends NamedStyles<T> | NamedStyles<any>>(input: input<T>) {
    return () => {
        const anotherTheme = useTheme();
        return input(anotherTheme);
    };
}
