import i18n from "i18n-js";
import * as Localization from "expo-localization";

export const zwnj = "‌";

export default function initStrings() {
    i18n.translations = {
        en: {
            messenger: "messenger",
            settings: "settings",
            explore: "explore",
            personalPage: "personal page",
            appName: "app-name",
            chats: "chats",
            allPosts: "All Posts",
            channelPosts: "Channel Posts",
            pages: "Pages",
            you: "You",
            posts: "Posts",
            following: "following",
            followers: "followers",
        },
        fa: {
            messenger: "پیام رسان",
            settings: "تنظیمات",
            explore: "کاوش",
            personalPage: "صفحه شخصی",
            appName: "نام برنامه",
            chats: "مکالمات",
            allPosts: `تمامی پست${zwnj}ها`,
            channelPosts: `پست کانال${zwnj}ها`,
            pages: "صفحات",
            you: "شما",
            posts: `پست${zwnj}ها`,
            following: "دنبال شوندگان",
            followers: "دنبال کنندگان",
        },
    };

    i18n.locale = Localization.locale;

    i18n.fallbacks = true;
}
