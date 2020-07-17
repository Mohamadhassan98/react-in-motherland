import React, {useContext} from "react";
import {AsyncStorage, I18nManager} from "react-native";
import CommonColor from "../../native-base-theme/variables/commonColor";
import {loader} from "../../assets/fonts/Loader";
import fontTypes from "../../assets/fonts/FontTypes";
import * as Localization from "expo-localization";
import initStrings from "./strings";
import restart from "../utils/restart";

export interface Palette {
    Primary: string;
    Secondary: string;
    primary: ColorTypes;
    secondary: ColorTypes;
    textPrimary: string;
    textSecondary: string;
    setPrimary: (value: string) => void;
    setSecondary: (value: string) => void;
    Disabled: string;
}

export interface Localize {
    language: string;
    setLanguage: (language: string | null) => Promise<void>;
    isSystemDefault: boolean;
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

export interface Auth {
    login: () => void;
    logout: () => void;
    loggedIn: boolean;
}

export interface ThemeContextShape {
    palette: Palette;
    font: Font;
    localize: Localize;
    auth: Auth;
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
        Disabled: "#FFFFFF",
    },
    font: {
        Body: fontTypes("fa").Normal,
        body: fontTypes("fa"),
        Footer: fontTypes("fa").Normal,
        footer: fontTypes("fa"),
        Header: fontTypes("fa").Normal,
        header: fontTypes("fa"),
    },
    localize: {
        language: "fa",
        setLanguage: async () => {},
        isSystemDefault: true,
    },
    auth: {
        loggedIn: false,
        login: () => {},
        logout: () => {},
    },
});

export default function useTheme() {
    return useContext(ThemeContext);
}

const consumer = ThemeContext.Consumer;
export {consumer as ThemeConsumer};

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
        AsyncStorage.getItem("language").then(async (value) => {
            if (!value) {
                setLanguage(Localization.isRTL ? "fa" : "en");
                initStrings(Localization.isRTL ? "fa" : "en");
                await AsyncStorage.setItem("language", "default");
                I18nManager.allowRTL(Localization.isRTL);
                I18nManager.forceRTL(Localization.isRTL);
                await restart();
                return;
            }
            if (value !== "default") {
                setLanguage(value);
                initStrings(value);
            } else {
                setLanguage(null);
                initStrings(Localization.isRTL ? "fa" : "en");
            }
        });
        AsyncStorage.getItem("auth").then((value) => {
            if (value) {
                setLoggedIn(true);
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
    const [loggedIn, setLoggedIn] = React.useState(false);
    const login = () => {
        AsyncStorage.setItem("auth", "true").then(() => setLoggedIn(true));
    };

    const logout = () => {
        AsyncStorage.removeItem("auth").then(() => setLoggedIn(false));
    };
    const setPrime = (value: string) => {
        AsyncStorage.setItem("primary", value).then(() => setPrimary(value));
    };
    const setSecond = (value: string) => {
        AsyncStorage.setItem("secondary", value).then(() => setSecondary(value));
    };
    const setLocale = async (value: string | null) => {
        initStrings(value ? value : Localization.isRTL ? "fa" : "en");
        await AsyncStorage.setItem("language", value ? value : "default");
        I18nManager.allowRTL((!!value && value === "fa") || (!value && Localization.isRTL));
        I18nManager.forceRTL((!!value && value === "fa") || (!value && Localization.isRTL));
    };
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
        Disabled: "#0000001E",
    };
    const font = {
        Body: fontTypes(language ? language : Localization.isRTL ? "fa" : "en").Normal,
        body: fontTypes(language ? language : Localization.isRTL ? "fa" : "en"),
        Footer: fontTypes(language ? language : Localization.isRTL ? "fa" : "en").Normal,
        footer: fontTypes(language ? language : Localization.isRTL ? "fa" : "en"),
        Header: fontTypes(language ? language : Localization.isRTL ? "fa" : "en").Normal,
        header: fontTypes(language ? language : Localization.isRTL ? "fa" : "en"),
    };
    const localize = {
        language: language ? language : Localization.isRTL ? "fa" : "en",
        setLanguage: setLocale,
        isSystemDefault: !language,
    };
    const auth = {
        loggedIn,
        login,
        logout,
    };
    if (!loaded) {
        return null;
    }
    return <ThemeContext.Provider value={{palette, font, localize, auth}}>{children}</ThemeContext.Provider>;
}
