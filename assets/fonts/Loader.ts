import * as Font from "expo-font";
import {
    RobotoMedium,
    SegoeUI,
    SegoeUIBold,
    SegoeUIBoldItalic,
    SegoeUIItalic,
    Shabnam,
    ShabnamBold,
    ShabnamLight,
    ShabnamMedium,
    ShabnamThin,
} from "./FontsAddress";

export function loader() {
    return Font.loadAsync({
        Shabnam,
        ShabnamBold,
        ShabnamLight,
        ShabnamMedium,
        ShabnamThin,
        SegoeUI,
        SegoeUIBoldItalic,
        SegoeUIBold,
        SegoeUIItalic,
        Roboto_medium: RobotoMedium,
    });
}
