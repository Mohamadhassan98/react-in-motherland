import React, {useContext} from "react";
import {AsyncStorage} from "react-native";
import CommonColor from "../../native-base-theme/variables/commonColor";
import {loader} from "../../assets/fonts/Loader";
import fontTypes from "../../assets/fonts/FontTypes";

export interface Palette {
    primary: string;
    secondary: string;
    setPrimary: (value: string) => void;
    setSecondary: (value: string) => void;
}

export interface FontTypes {
    normal: string;
    bold: string;
    light: string;
    medium: string;
    thin: string;
    italic: string;
    boldItalic: string;
    lightItalic: string;
    mediumItalic: string;
    thinItalic: string;
}

export interface Font {
    header: {
        rtl: FontTypes;
        ltr: FontTypes;
    };
    body: {
        rtl: FontTypes;
        ltr: FontTypes;
    };
    footer: {
        rtl: FontTypes;
        ltr: FontTypes;
    };
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
    },
    font: {
        header: {
            rtl: fontTypes.english,
            ltr: fontTypes.persian,
        },
        body: {
            rtl: fontTypes.english,
            ltr: fontTypes.persian,
        },
        footer: {
            rtl: fontTypes.english,
            ltr: fontTypes.persian,
        },
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
    };
    const font = {
        header: {
            rtl: fontTypes.english,
            ltr: fontTypes.persian,
        },
        body: {
            rtl: fontTypes.english,
            ltr: fontTypes.persian,
        },
        footer: {
            rtl: fontTypes.english,
            ltr: fontTypes.persian,
        },
    };
    if (!loaded) {
        return null;
    }
    return <ThemeContext.Provider value={{palette, font}}>{children}</ThemeContext.Provider>;
}
