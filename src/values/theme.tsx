import React, {useContext} from "react";
import {AsyncStorage} from "react-native";
import CommonColor from "../../native-base-theme/variables/commonColor";
import {loader} from "../../assets/fonts/Loader";
import fontTypes from "../../assets/fonts/FontTypes";

export interface Palette {
    primary: string;
    secondary: string;
    textPrimary: string;
    textSecondary: string;
    setPrimary: (value: string) => void;
    setSecondary: (value: string) => void;
}

export interface FontTypes {
    normal: FontLocalization;
    bold: FontLocalization;
    light: FontLocalization;
    medium: FontLocalization;
    thin: FontLocalization;
    italic: FontLocalization;
    boldItalic: FontLocalization;
    lightItalic: FontLocalization;
    mediumItalic: FontLocalization;
    thinItalic: FontLocalization;
    Normal: string;
    Bold: string;
    Light: string;
    Medium: string;
    Thin: string;
    Italic: string;
    BoldItalic: string;
    LightItalic: string;
    MediumItalic: string;
    ThinItalic: string;
}

export interface FontLocalization {
    rtl: string;
    ltr: string;
}

export interface Font {
    header: FontTypes;
    body: FontTypes;
    footer: FontTypes;
    Header: string;
    Body: string;
    Footer: string;
}

export interface ThemeContextShape {
    palette: Palette;
    font: Font;
}

const ThemeContext = React.createContext<ThemeContextShape>({
    palette: {
        primary: "#F12345",
        secondary: "#F12345",
        setPrimary: () => {},
        setSecondary: () => {},
        textPrimary: "#000000",
        textSecondary: "#FFFFFF",
    },
    font: {
        Body: fontTypes.Normal,
        body: fontTypes,
        Footer: fontTypes.Normal,
        footer: fontTypes,
        Header: fontTypes.Normal,
        header: fontTypes,
    },
});

export default function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({children}: {children: React.ReactElement}) {
    React.useEffect(() => {
        AsyncStorage.getItem("primary").then((value) => {
            if (value) {
                setPrimary(value);
            }
        });
        AsyncStorage.getItem("secondary").then((value) => {
            if (value) {
                setSecondary(value);
            }
        });
        loader().then(() => {
            setLoaded(true);
        });
    }, []);
    const [primary, setPrimary] = React.useState<string>(CommonColor.brandPrimary);
    const [secondary, setSecondary] = React.useState<string>(CommonColor.brandSecondary);
    const [loaded, setLoaded] = React.useState(false);
    const setPrime = (value: string) => {
        AsyncStorage.setItem("primary", value).then(() => setPrimary(value));
    };
    const setSecond = (value: string) => {
        AsyncStorage.setItem("secondary", value).then(() => setSecondary(value));
    };
    const palette = {
        primary: primary,
        secondary: secondary,
        setPrimary: setPrime,
        setSecondary: setSecond,
        textPrimary: "#000000",
        textSecondary: "#FFFFFF",
    };
    const font = {
        Body: fontTypes.Normal,
        body: fontTypes,
        Footer: fontTypes.Normal,
        footer: fontTypes,
        Header: fontTypes.Normal,
        header: fontTypes,
    };
    if (!loaded) {
        return null;
    }
    return <ThemeContext.Provider value={{palette, font}}>{children}</ThemeContext.Provider>;
}
