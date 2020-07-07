import * as Font from "expo-font";
import {
    Shabnam,
    ShabnamBold,
    ShabnamLight,
    ShabnamMedium,
    ShabnamThin,
    SegoeUI,
    SegoeUIBoldItalic,
    SegoeUIBold,
    SegoeUIItalic,
} from "./FontsAddress";

export function loader() {
    return Font.loadAsync({
        // Load a font `Montserrat` from a static resource
        Shabnam,
        ShabnamBold,
        ShabnamLight,
        ShabnamMedium,
        ShabnamThin,
        SegoeUI,
        SegoeUIBoldItalic,
        SegoeUIBold,
        SegoeUIItalic,
    });
}
