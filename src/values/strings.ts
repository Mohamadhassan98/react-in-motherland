import i18n from "i18n-js";
import * as Localization from "expo-localization";

export default function initStrings() {
    i18n.translations = {
        en: {
            messenger: "messenger",
            settings: "settings",
            explore: "explore",
            personalPage: "personal page",
            messageBoxPlaceHolder : "Write your message here",
            online : "online",
            offline : "offline",
        },
        fa: {
            messenger: "پیام رسان",
            settings: "تنظیمات",
            explore: "کاوش",
            personalPage: "صفحه شخصی",
            messageBoxPlaceHolder : "پیام خود را وارد کنید",
            online : "بر خط",
            offline : "آفلاین"
        },
    };

    i18n.locale = Localization.locale;

    i18n.fallbacks = true;
}
