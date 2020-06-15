import i18n from "i18n-js";
import * as Localization from "expo-localization";

i18n.translations = {
    en: {
        messenger: "messenger",
        settings: "settings",
        explore: "explore",
        personalPage: "personal page",
    },
    fa: {
        messenger: "پیام رسان",
        settings: "تنظیمات",
        explore: "کاوش",
        personalPage: "صفحه شخصی",
    },
};

i18n.locale = Localization.locale;

i18n.fallbacks = true;
