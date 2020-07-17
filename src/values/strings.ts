import i18n from "i18n-js";
import {I18nManager} from "react-native";

export const zwnj = "‌";

export default function initStrings(locale: string) {
    i18n.translations = {
        en: {
            messenger: "messenger",
            settings: "settings",
            explore: "explore",
            personalPage: "personal page",
            appName: "Smartiz",
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
            Primary: "primary",
            Secondary: "secondary",
            save: "save",
            resetToDefault: "Reset to default",
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
            editProfile: "Edit Profile",
            insertName: "Insert Your Name Here",
            insertBio: "Insert Your Bio Here",
            insertUsername: "Insert Your Username Here",
            languageChange: "Language change",
            languageChanged:
                "Language changed. For styles and configurations to change correctly, a restart is required",
            restartNow: "Restart now",
            later: "Later",
            Recent: "Recent",
            People: "People",
            lastSeenRecently: "last seen recently",
            privateChannel: "private channel",
            publicChannel: "public channel",
            members: " members ",
            newMessage: "New Message",
            addContact: "Add Contact",
            recent: "Recent",
            messages: "Messages",
            generalSettings: "General Settings",
            privacyAndSecurity: "Privacy And Security",
            languageSettings: "Language settings",
            optimizeImageToSaveData: "Optimize Image To Save Data",
            showPostsByPopularity: "Show Posts By Popularity",
            privateAccount: "Private Account",
            privateAccountNote: "people will seek permission to follow you",
            allowSaving: "Allow Saving",
            allowSavingNote: "people can save your post",
            post: "post",
            report: "report",
            reportedSuccessfully: "Reported successfully. Thanks.",
            sharePost: "Share post",
            comments: "comment(s)",
            viewAll: "view all",
            writeComment: "Write comment...",
            Save: "Save",
            Date: "Date",
            _justNow: "just now",
            _tenMinutesAgo: "10 mins ago",
            _3MinutesAgo: "3 mins ago",
            "What's in your mind?": "What's in your mind?",
            next: "next",
            skip: "skip",
            previous: "previous",
            finish: "finish",
            NoResultsFound: "No results found",
            newGroup: "New Group",
            channelName: "Channel Name",
            chooseMembers: "Choose members",
            Members: "Members",
            newChannel: "New Channel",
            firstName: "First name",
            lastName: "Last name",
            description: "Description",
            groupName: "Group name",
            login: "login",
            suggestions: "Suggestions for you",
            emptyCode: "Code cannot be empty",
            wrongCode: "Code is wrong!",
            continue: "continue?",
            enterVerificationCode: "Enter verification code",
            wrongNumber: "Wrong number?",
            messengerTour: `Say hi to your friends!\nUse messenger to chat with friends and share media with'em.`,
            personalPageTour: `Look for fresh content?\nCheck for your followers' latest posts or post a new content for your followers.`,
            explorePageTour: `Everything from A to Z!\nSearch for anything and find useful content.`,
            settingsPageTour: `How ever you want!\nConfigure and customize app behaviour here.`,
            notificationHeader: "notifications",
            ClearSearchHistory: "Clear search history",
            Clear: "CLEAR",
            cancel: "CANCEL",
            ClearSearchHistoryMessage: "Are you sure you want to clear your search history ?",
            logout: "Logout",
            Comments: "Comments",
            pm: "pm",
            am: "am",
            ok: "ok",
            error: "error",
            new: "New",
            likedYourPost: "Liked Your Post",
            SevenHoursAgo: "7h ago",
            today: "Today",
            thisWeek: "This Week",
            thisMonth: "This Month",
            DeleteNotification: "Delete Notification",
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
            resetToDefault: "بازگشت به مقدار پیش فرض",
            chosenColor: "رنگ انتخابی:",
            chooseOneOfThese: `یکی از رنگ${zwnj}های زیر را انتخاب کنید.`,
            orCustomizeIt: "یا به سلیقه خود تغییر دهید...",
            editProfile: "ویرایش پروفایل",
            insertName: "نام خود را اینجا وارد نمایید",
            insertBio: "بیو را اینجا وارد نمایید",
            insertUsername: "نام کاربری خود را اینجا وارد نمایید",
            search: "جستجو",
            searchForTagsNamesAndContent: `جستجو برای اشخاص، برچسب${zwnj}ها و محتوا...`,
            _todayChannelPost: "امروز 03:24 بعد از ظهر",
            english: "English",
            persian: "فارسی",
            systemDefault: "پیش فرض دستگاه",
            language: "زبان",
            languageChange: "تغییر زبان",
            languageChanged: "زبان تغییر کرد. برای تغییر صحیح تنظیمات و ظاهر، شروع مجدد نیاز است.",
            restartNow: "الان شروع مجدد کن.",
            later: "باشه بعداً",
            login: "ورود",
            Recent: "اخیرا",
            People: "افراد",
            lastSeenRecently: "آخرین بازدید اخیرا ",
            privateChannel: "کانال خصوصی",
            publicChannel: "کانال عمومی",
            members: " عضو ",
            newMessage: "پیام جدید",
            addContact: "افزودن مخاطب جدید",
            recent: "اخیرا",
            messages: "پیام ها",
            generalSettings: "تنظیمات عمومی",
            languageSettings: "تنظیمات زبان",
            privacyAndSecurity: "حریم خصوصی و امنیت",
            showPostsByPopularity: "نمایش پست بر اساس محبوبیت",
            optimizeImageToSaveData: "بهینه سازی تصویر برای ذخیره داده ها",
            privateAccount: "حساب خصوصی",
            privateAccountNote: "دیگران برای دنبال کردن شما نیاز به اجازه دارند",
            allowSaving: "اجازه ی ذخیره سازی",
            allowSavingNote: "دیگران می توانند پست های شما را ذخیره کنند",
            post: "پست",
            report: "گزارش",
            reportedSuccessfully: "با موفقیت گزارش شد. ممنونیم.",
            sharePost: "اشتراک پست",
            comments: "نظر",
            viewAll: "نمایش همه",
            writeComment: "افزودن نظر...",
            _justNow: "همین الان",
            _tenMinutesAgo: "10 دقیقه پیش",
            _3MinutesAgo: "3 دقیقه پیش",
            Save: "ذخیره",
            Date: "تاریح",
            NoResultsFound: "نتیجه ای یافت نشد",
            newGroup: "گروه جدید",
            chooseMembers: "اعضا را انتخاب کنید",
            Members: "اعضا",
            newChannel: "کانال جدید",
            firstName: "نام",
            lastName: "نام خانوادگی",
            description: "توضیحات",
            groupName: "نام گروه",
            channelName: "نام گروه",
            next: "بعدی",
            skip: "رد شدن",
            previous: "قبلی",
            finish: "اتمام",
            "What's in your mind?": "چه چیزی در ذهن دارید؟",
            online: "آنلاین",
            enterCode: "کد دریافتی را وارد کنید",
            emptyCode: "کد نمی تواند خالی باشد",
            wrongNumber: "شماره غلط است؟",
            continue: "ادامه؟",
            suggestions: "پیشنهادهایی برای شما",
            wrongCode: "کد اشتباه است",
            enterVerificationCode: "کد تأیید را وارد کنید.",
            messengerTour: `از حال دوستاتون با خبر شین!\n با استفاده از بخش پیام${zwnj}رسان می${zwnj}تونید به راحتی با بقیه چت کنین و محتواهاتون رو به اشتراک بذارین. `,
            personalPageTour: `دنبال مطالب جدیدین؟\nاز اینجا بررسی کنید که کسایی که دنبالشون کردین جدیداً چه مطالبی رو منتشر کردن و یا خودتون پست جدیدی منتشر کنید.`,
            explorePageTour: `از شیر مرغ تا جون آدمیزاد!\n توی این قسمت با جستجو می${zwnj}تونین هر مطلبی که می${zwnj}خواید رو پیدا کنین.`,
            settingsPageTour: `هر جور خودت دوست داری!\nاز این قسمت می${zwnj}تونین تنظیمات مورد نظر خودتونو اعمال کنین!`,
            notificationHeader: "اعلانات",
            ClearSearchHistory: "پاک کردن تاریخچه ی جست و جو",
            Clear: "پاک کردن",
            cancel: "لغو",
            ClearSearchHistoryMessage: "آیا از پاک کردن تاریخچه ی جست و جوی خود اطمینان دارید ؟",
            logout: "خروج",
            Comments: "نظرات",
            pm: "بعد از ظهر",
            am: "قبل از ظهر",
            ok: "باشه",
            error: "خطا",
            new: "جدید",
            likedYourPost: "پست شما را پسندید",
            SevenHoursAgo: "هفت ساعت پیش",
            today: "امروز",
            thisWeek: "هفته گذشته",
            thisMonth: "ماه گذشته",
            DeleteNotification: "حذف اعلان",
        },
    };

    i18n.locale = locale;

    i18n.fallbacks = true;
}

export const i17n = {
    pm: I18nManager.isRTL ? "بعد از ظهر" : "pm",
    am: I18nManager.isRTL ? "قبل از ظهر" : "am",
    next: I18nManager.isRTL ? "بعدی" : "next",
    skip: I18nManager.isRTL ? "رد شدن" : "skip",
    previous: I18nManager.isRTL ? "قبلی" : "previous",
    finish: I18nManager.isRTL ? "اتمام" : "finish",
};

export let chatList = [
    {
        FirstName: "zahra",
        LastName: "kamali",
        message: "سلام زهرا خوبی ؟ چه خبر؟؟؟؟ ؟؟؟ ؟؟ ؟؟؟",
        notification: 5,
        mute: false,
        img: require("../../assets/avatar.jpg"),
        time: `3:43 ${i17n.pm}`,
        id: 1,
    },
    {
        FirstName: "behnaz",
        LastName: "gh",
        message: "hello zahra :))))))))))) )))))))))))))",
        notification: "",
        mute: true,
        img: require("../../assets/avatar.jpg"),
        time: `3:43 ${i17n.pm}`,
        id: 2,
    },
    {
        FirstName: "faezeh joon",
        LastName: "",
        message: "سلام؟خوبی ",
        notification: 150,
        mute: false,
        img: require("../../assets/avatar.jpg"),
        time: `3:43 ${i17n.pm}`,
        id: 3,
    },
    {
        FirstName: "ali",
        LastName: "",
        message: "سلام؟؟؟؟؟  سلام سلام سلام سلام سلام ",
        notification: 150,
        mute: false,
        img: require("../../assets/avatar.jpg"),
        time: `3:43 ${i17n.pm}`,
        id: 4,
    },
    {
        FirstName: "ali",
        LastName: "",
        message: "سلام؟؟؟؟؟  سلام سلام سلام سلام سلام ",
        notification: 150,
        mute: false,
        img: require("../../assets/avatar.jpg"),
        time: `3:45 ${i17n.pm}`,
        id: 5,
    },
    {
        FirstName: "ali",
        LastName: "",
        message: "سلام؟؟؟؟؟  سلام سلام سلام سلام سلام ",
        notification: 150,
        mute: false,
        img: require("../../assets/avatar.jpg"),
        time: `3:43 ${i17n.pm}`,
        id: 6,
    },
    {
        FirstName: "ali",
        LastName: "",
        message: "سلام؟؟؟؟؟  سلام سلام سلام سلام سلام ",
        notification: 150,
        mute: false,
        img: require("../../assets/avatar.jpg"),
        time: `3:43 ${i17n.pm}`,
        id: 7,
    },
    {
        FirstName: "ali",
        LastName: "",
        message: "سلام؟؟؟؟؟  سلام سلام سلام سلام سلام ",
        notification: 150,
        mute: false,
        img: require("../../assets/avatar.jpg"),
        time: `3:43 ${i17n.pm}`,
        id: 8,
    },
    {
        FirstName: "ali",
        LastName: "",
        message: "سلام؟؟؟؟؟  سلام سلام سلام سلام سلام ",
        notification: "",
        mute: false,
        img: require("../../assets/avatar.jpg"),
        time: `4:00 ${i17n.pm}`,
        id: 9,
    },
];

export let Recent = [
    {
        FirstName: "zahra",
        LastName: "kamali",
        Description: "lastSeenRecently",
        notification: 5,
        mute: false,
        img: require("../../assets/avatar.jpg"),
        id: 1,
    },
    {
        FirstName: "behnaz",
        LastName: "",
        Description: "lastSeenRecently",
        notification: 5,
        mute: false,
        img: require("../../assets/avatar.jpg"),
        id: 2,
    },
    {
        FirstName: "ui",
        LastName: "",
        Description: "privateChannel",
        notification: 5,
        mute: true,
        img: require("../../assets/avatar.jpg"),
        id: 3,
    },
    {
        FirstName: "تعامل انسان و کامپیوتر",
        LastName: "",
        Description: "publicChannel",
        notification: 5,
        mute: false,
        img: require("../../assets/avatar.jpg"),
        id: 4,
    },
    {
        FirstName: "elham",
        LastName: "",
        Description: "lastSeenRecently",
        notification: "",
        mute: false,
        img: require("../../assets/avatar.jpg"),
        id: 5,
    },
    {
        FirstName: "دورهمی",
        LastName: "",
        Description: "members",
        numberOfMembers: "12",
        notification: "4",
        mute: true,
        img: require("../../assets/avatar.jpg"),
        id: 6,
    },
    {
        FirstName: "نرم افزار",
        LastName: "",
        Description: "members",
        numberOfMembers: "42",
        notification: "1",
        mute: true,
        img: require("../../assets/avatar.jpg"),
        id: 7,
    },
    {
        FirstName: "دورهمی",
        LastName: "",
        Description: "members",
        numberOfMembers: "12",
        notification: "2",
        mute: true,
        img: require("../../assets/avatar.jpg"),
        id: 8,
    },
    {
        FirstName: "داده کاوی",
        LastName: "",
        Description: "members",
        numberOfMembers: "34",
        notification: "4",
        mute: true,
        img: require("../../assets/avatar.jpg"),
        id: 9,
    },
    {
        FirstName: "خانوادگی",
        LastName: "",
        Description: "members",
        numberOfMembers: "12",
        notification: "4",
        mute: true,
        img: require("../../assets/avatar.jpg"),
        id: 10,
    },
];

export let contactListA = [
    {
        FirstName: "abas",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 1,
    },
    {
        FirstName: "ahmad",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 2,
    },
    {
        FirstName: "ahmad",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 3,
    },
    {
        FirstName: "ali",
        LastName: "ahmadi",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 4,
    },
    {
        FirstName: "ali",
        LastName: "kamali",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 5,
    },
    {
        FirstName: "arezoo",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 6,
    },
    {
        FirstName: "azar",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 7,
    },
];

export let contactListB = [
    {
        FirstName: "baba",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 8,
    },
    {
        FirstName: "baran",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 9,
    },
];

export let contactListF = [
    {
        FirstName: "faezeh joon",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 10,
    },
    {
        FirstName: "fatemeh",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 11,
    },
];

export let contactListH = [
    {
        FirstName: "hamid",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 12,
    },
];

export let contactListFaAlef = [
    {
        FirstName: "الهام",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 13,
    },
];

export let contactListFaBe = [
    {
        FirstName: "باران",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 14,
    },
    {
        FirstName: "بهار",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 15,
    },
];

export let peopleList = [
    {
        firstName: "zahra",
        lastName: "kml",
        img: require("../../assets/img_avatar2.png"),
        online: true,
        mute: false,
        messageNumber: 5,
        id: 1,
    },
    {
        firstName: "behnaz",
        lastName: "",
        img: require("../../assets/img_avatar2.png"),
        online: false,
        mute: false,
        messageNumber: 3,
        id: 2,
    },
    {
        firstName: "faezeh",
        lastName: "",
        img: require("../../assets/img_avatar2.png"),
        online: false,
        mute: false,
        messageNumber: 0,
        id: 3,
    },
    {
        firstName: "elham",
        lastName: "",
        img: require("../../assets/img_avatar2.png"),
        online: false,
        mute: false,
        messageNumber: 0,
        id: 4,
    },
    {
        firstName: "behnaz",
        lastName: "",
        img: require("../../assets/img_avatar2.png"),
        online: false,
        mute: false,
        messageNumber: 3,
        id: 5,
    },
    {
        firstName: "behnaz",
        lastName: "",
        img: require("../../assets/img_avatar2.png"),
        online: false,
        mute: true,
        messageNumber: 3,
        id: 6,
    },
];

export let contactList = [
    {
        FirstName: "باران",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 1,
        choose: false,
    },
    {
        FirstName: "zahra",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/img_avatar2.png"),
        id: 2,
        choose: false,
    },
    {
        FirstName: "behnaz",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 3,
        choose: false,
    },
    {
        FirstName: "maman",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 4,
        choose: false,
    },
    {
        FirstName: "baba",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 5,
        choose: false,
    },
    {
        FirstName: "faezeh",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/avatar.jpg"),
        id: 6,
        choose: false,
    },
    {
        FirstName: "sara",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/img_avatar2.png"),
        id: 7,
        choose: false,
    },
    {
        FirstName: "zahra",
        LastName: "gh",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/img_avatar2.png"),
        id: 8,
        choose: false,
    },
    {
        FirstName: "zahra",
        LastName: "kml",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/img_avatar2.png"),
        id: 9,
        choose: false,
    },
];

export let SearcList = [
    {
        FirstName: "zahra",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/img_avatar2.png"),
        id: 2,
        choose: false,
    },
    {
        FirstName: "zahra gh",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/img_avatar2.png"),
        id: 8,
        choose: false,
    },
    {
        FirstName: "zahra kml",
        LastName: "",
        LastSeen: "lastSeenRecently",
        img: require("../../assets/img_avatar2.png"),
        id: 9,
        choose: false,
    },
];
