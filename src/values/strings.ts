import i18n from "i18n-js";
import * as Localization from "expo-localization";

i18n.translations = {
    en: {
        messenger: "messenger",
    },
    fa: {
        messenger: "پیام رسان",
    },
};

i18n.locale = Localization.locale;

i18n.fallbacks = true;
