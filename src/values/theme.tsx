import React, {useContext} from "react";
import {AsyncStorage, I18nManager} from "react-native";
import CommonColor from "../../native-base-theme/variables/commonColor";
import {loader} from "../../assets/fonts/Loader";
import fontTypes from "../../assets/fonts/FontTypes";
import * as Localization from "expo-localization";

export interface Palette {
    Primary: string;
    Secondary: string;
    primary: ColorTypes;
    secondary: ColorTypes;
    textPrimary: string;
    textSecondary: string;
    setPrimary: (value: string) => void;
    setSecondary: (value: string) => void;
}

export interface Localize {
    language: string;
    setLanguage: (language: string | null) => void;
}

export interface ColorTypes {
    main: string;
    light: string;
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
    localize: Localize;
}

const ThemeContext = React.createContext<ThemeContextShape>({
    palette: {
        Primary: "#F12345",
        Secondary: "#F12345",
        primary: {main: "#F12345", light: "#F12345D9"},
        secondary: {main: "#F12345", light: "#F12345D9"},
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
    localize: {
        language: "fa",
        setLanguage: () => {},
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
        AsyncStorage.getItem("language").then((value) => {
            if (!value) {
                setLanguage(Localization.isRTL ? "fa" : "en");
                AsyncStorage.setItem("language", "default");
                return;
            }
            if (value !== "default") {
                setLanguage(value);
            } else {
                setLanguage(null);
            }
        });
        loader().then(() => {
            setLoaded(true);
        });
    }, []);
    const [primary, setPrimary] = React.useState<string>(CommonColor.brandPrimary);
    const [secondary, setSecondary] = React.useState<string>(CommonColor.brandSecondary);
    const [loaded, setLoaded] = React.useState(false);
    const [language, setLanguage] = React.useState<string | null>(null);
    const setPrime = (value: string) => {
        AsyncStorage.setItem("primary", value).then(() => setPrimary(value));
    };
    const setSecond = (value: string) => {
        AsyncStorage.setItem("secondary", value).then(() => setSecondary(value));
    };
    const setLocale = (value: string | null) => {
        AsyncStorage.setItem("language", value ? value : "default").then(() =>
            setLanguage(value !== "default" ? value : null)
        );
    };
    React.useEffect(() => {
        // I18nManager.allowRTL(language ? language === "fa" : Localization.isRTL);
        // I18nManager.forceRTL(language ? language === "fa" : Localization.isRTL);
        I18nManager.allowRTL(true);
        I18nManager.forceRTL(true);
    }, []);
    const palette = {
        Primary: primary,
        Secondary: secondary,
        primary: {
            main: primary,
            light: `${primary}D9`,
        },
        secondary: {
            main: secondary,
            light: `${secondary}D9`,
        },
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
    const localize = {
        language: language ? language : Localization.isRTL ? "fa" : "en",
        setLanguage: setLocale,
    };
    if (!loaded) {
        return null;
    }
    return <ThemeContext.Provider value={{palette, font, localize}}>{children}</ThemeContext.Provider>;
}
