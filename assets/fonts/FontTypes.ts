export default (locale: string) => ({
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
    Normal: locale === "fa" ? "Shabnam" : "SegoeUI",
    Bold: locale === "fa" ? "ShabnamBold" : "SegoeUIBold",
    Light: locale === "fa" ? "ShabnamLight" : "SegoeUI",
    Medium: locale === "fa" ? "ShabnamMedium" : "SegoeUI",
    Thin: locale === "fa" ? "ShabnamThin" : "SegoeUI",
    Italic: locale === "fa" ? "Shabnam" : "SegoeUIItalic",
    BoldItalic: locale === "fa" ? "Shabnam" : "SegoeUIBoldItalic",
    LightItalic: locale === "fa" ? "Shabnam" : "SegoeUI",
    MediumItalic: locale === "fa" ? "Shabnam" : "SegoeUI",
    ThinItalic: locale === "fa" ? "Shabnam" : "SegoeUI",
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
});
