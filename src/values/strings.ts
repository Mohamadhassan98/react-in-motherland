import i18n from "i18n-js";

export const zwnj = "‌";

export default function initStrings(locale: string) {
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
            messageBoxPlaceHolder: "Write your message here...",
            colorSettings: "Color Settings",
            primary: "primary",
            secondary: "secondary",
            save: "save",
            chosenColor: "chosen color:",
            chooseOneOfThese: "Choose one of these colors:",
            orCustomizeIt: "Or customize it...",
            search: "search",
            searchForTagsNamesAndContent: "Search for names, tags and content...",
            _todayChannelPost: "today 03:24 PM",
            language: "language",
            english: "English",
            persian: "فارسی",
            systemDefault: "System default",
        },
        fa: {
            messenger: `پیام${zwnj}رسان`,
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
            messageBoxPlaceHolder: "پیام خود را وارد کنید...",
            colorSettings: "تنظیمات رنگ",
            save: "ذخیره",
            chosenColor: "رنگ انتخابی:",
            chooseOneOfThese: `یکی از رنگ${zwnj}های زیر را انتخاب کنید.`,
            orCustomizeIt: "یا به سلیقه خود تغییر دهید...",
            search: "جستجو",
            searchForTagsNamesAndContent: `جستجو برای اشخاص، برچسب${zwnj}ها و محتوا...`,
            _todayChannelPost: "امروز 03:24 بعد از ظهر",
            english: "English",
            persian: "فارسی",
            systemDefault: "پیش فرض دستگاه",
            language: "زبان",
        },
    };

    i18n.locale = locale;

    i18n.fallbacks = true;
}
