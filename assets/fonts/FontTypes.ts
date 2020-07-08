import * as Localization from "expo-localization";

export default {
    // normal: string;
    // bold: string;
    // light: string;
    // medium: string;
    // thin: string;
    // italic: string;
    // normalItalic: string;
    // boldItalic: string;
    // lightItalic: string;
    // mediumItalic: string;
    // thinItalic: string;
    Normal: Localization.isRTL ? "Shabnam" : "SegoeUI",
    Bold: Localization.isRTL ? "ShabnamBold" : "SegoeUIBold",
    Light: Localization.isRTL ? "ShabnamLight" : "SegoeUI",
    Medium: Localization.isRTL ? "ShabnamMedium" : "SegoeUI",
    Thin: Localization.isRTL ? "ShabnamThin" : "SegoeUI",
    Italic: Localization.isRTL ? "Shabnam" : "SegoeUIItalic",
    BoldItalic: Localization.isRTL ? "Shabnam" : "SegoeUIBoldItalic",
    LightItalic: Localization.isRTL ? "Shabnam" : "SegoeUI",
    MediumItalic: Localization.isRTL ? "Shabnam" : "SegoeUI",
    ThinItalic: Localization.isRTL ? "Shabnam" : "SegoeUI",
    normal: {
        rtl: "Shabnam",
        ltr: "SegoeUI",
    },
    bold: {
        rtl: "ShabnamBold",
        ltr: "SegoeUIBold",
    },
    light: {
        rtl: "ShabnamLight",
        ltr: "SegoeUI",
    },
    medium: {
        rtl: "ShabnamMedium",
        ltr: "SegoeUI",
    },
    thin: {
        rtl: "ShabnamThin",
        ltr: "SegoeUI",
    },
    italic: {
        rtl: "Shabnam",
        ltr: "SegoeUIItalic",
    },
    boldItalic: {
        rtl: "Shabnam",
        ltr: "SegoeUIBoldItalic",
    },
    lightItalic: {
        rtl: "Shabnam",
        ltr: "SegoeUI",
    },
    mediumItalic: {
        rtl: "Shabnam",
        ltr: "SegoeUI",
    },
    thinItalic: {
        rtl: "Shabnam",
        ltr: "SegoeUI",
    },
};
