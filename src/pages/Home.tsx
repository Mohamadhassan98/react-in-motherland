import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import {Button, Content, Fab, Tab, Tabs, Text, View} from "native-base";
import PersonalPageRecommends from "../components/PersonalPageRecommends";
import makeStyles from "../utils/makeStyles";
import {StackNavigator} from "../values/Routing";
import Icons8GoogleImagesIcon from "../../assets/icons/GoogleImagesIcon";
import CommonColors from "../../native-base-theme/variables/commonColor";
import {t} from "i18n-js";
import ExplorePosts from "../components/ExplorePosts";
import SimpleHeader from "../components/SimpleHeader";
import Icons8RegistrationIcon from "../../assets/icons/RegistrationIcon";
import Avatar from "../components/Avatar";
import NotificationIcon from "../../assets/icons/NotificationIcon";
import useTheme from "../values/theme";
import Feed from "../components/Feed";
import {ScrollView} from "react-native";

const useStyles = makeStyles((theme) => ({
    fab: {
        flex: 1,
    },
    fabButton: {
        backgroundColor: "#FFFCFC",
        borderColor: theme.palette.Primary,
        borderWidth: 2,
    },
    primary: {
        flex: 1,
    },
    activeTab: {
        backgroundColor: theme.palette.Primary,
    },
    activeTabText: {
        color: theme.palette.textSecondary,
    },
    tabs: {
        backgroundColor: theme.palette.textSecondary,
    },
    tabsText: {
        color: theme.palette.textPrimary,
    },
    underline: {
        backgroundColor: theme.palette.Secondary,
    },
    tabContainer: {
        backgroundColor: "transparent",
    },
    avatar: {
        width: "100%",
        //    flex: 1,
        alignItems: "flex-start",
        paddingStart: 16,
        paddingEnd: 16,
    },
    statusRow: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 16,
        paddingEnd: 16,
        alignItems: "center",
    },
    bioText: {
        textAlign: "left",
        paddingEnd: 16,
        paddingStart: 16,
    },
    statusText: {
        textAlign: "center",
        fontSize: 14,
    },
    fontBold: {
        fontFamily: theme.font.body.Bold,
        fontWeight: theme.localize.language === "fa" ? undefined : "bold",
    },
    text12: {
        fontSize: 12,
    },
    noFollow: {
        backgroundColor: theme.palette.primary.light,
    },
    noFollowText: {
        color: theme.palette.textSecondary,
    },
}));

export default function ({navigation, route}: StackNavigator<"Home">) {
    const styles = useStyles();
    const {bio, you} = route.params;
    const {localize} = useTheme();
    const [follow, setFollow] = React.useState(false);
    return (
        <MainPageLayout active={2} navigation={navigation}>
            <MainHeader size='collapsed' hasTabs>
                <SimpleHeader
                    title={you ? "you" : "personalPage"}
                    navigation={navigation}
                    leftAdornment={you ? "logo" : "back"}
                    rightAdornment={
                        you ? (
                            <Button transparent onPress={() => navigation.navigate("EditProfile")}>
                                <Icons8RegistrationIcon />
                            </Button>
                        ) : undefined
                    }
                />
            </MainHeader>
            <View style={styles.primary}>
                <View style={styles.avatar}>
                    <Avatar {...route.params} size={56} />
                </View>
                <Text style={[styles.bioText, styles.fontBold]}>{route.params.visibleName}</Text>
                <ScrollView>
                    <Text style={[styles.bioText, styles.text12]}>{bio}</Text>
                    <View style={styles.statusRow}>
                        <Button
                            transparent
                            style={you ? undefined : styles.noFollow}
                            small
                            onPress={() => {
                                if (you) {
                                    navigation.navigate("MyNotification", {uri: route.params.profileImage});
                                } else {
                                    setFollow((prevState) => !prevState);
                                }
                            }}
                        >
                            {you ? (
                                <NotificationIcon />
                            ) : (
                                <Text style={styles.noFollowText}>{follow ? t("unfollow") : t("follow")}</Text>
                            )}
                        </Button>
                        <View>
                            <Text style={[styles.statusText, styles.fontBold]}>{route.params.posts}</Text>
                            <Text style={[styles.statusText, styles.fontBold]}>{t("posts")}</Text>
                        </View>
                        <View>
                            <Text style={[styles.statusText, styles.fontBold]}>{route.params.followers}</Text>
                            <Text style={[styles.statusText, styles.fontBold]}>{t("followers")}</Text>
                        </View>
                        <View>
                            <Text style={[styles.statusText, styles.fontBold]}>{route.params.followings}</Text>
                            <Text style={[styles.statusText, styles.fontBold]}>{t("following")}</Text>
                        </View>
                    </View>
                    {you && (
                        <PersonalPageRecommends
                            images={new Array(5).fill(
                                "https://upload.wikimedia.org/wikipedia/commons/1/16/Mike_Pompeo_official_photo.jpg"
                            )}
                        />
                    )}
                    {you ? (
                        <Tabs
                            tabContainerStyle={styles.tabContainer}
                            tabBarUnderlineStyle={styles.underline}
                            tabBarActiveTextColor={CommonColors.inverseTextColor}
                        >
                            <Tab
                                heading={t("feed")}
                                tabStyle={styles.tabs}
                                activeTabStyle={styles.activeTab}
                                textStyle={styles.tabsText}
                                activeTextStyle={styles.activeTabText}
                            >
                                <Content>
                                    {localize.language === "fa" ? (
                                        <ExplorePosts navigation={navigation} />
                                    ) : (
                                        <Feed navigation={navigation} />
                                    )}
                                </Content>
                            </Tab>
                            <Tab
                                heading={t("myPosts")}
                                tabStyle={styles.tabs}
                                activeTabStyle={styles.activeTab}
                                textStyle={styles.tabsText}
                                activeTextStyle={styles.activeTabText}
                            >
                                <Content>
                                    {localize.language !== "fa" ? (
                                        <ExplorePosts navigation={navigation} />
                                    ) : (
                                        <Feed navigation={navigation} />
                                    )}
                                </Content>
                            </Tab>
                        </Tabs>
                    ) : (
                        <Content>
                            <ExplorePosts navigation={navigation} />
                        </Content>
                    )}
                </ScrollView>
                {you && (
                    <Fab position='bottomRight' style={styles.fabButton} onPress={() => navigation.navigate("NewPost")}>
                        <Icons8GoogleImagesIcon />
                    </Fab>
                )}
            </View>
        </MainPageLayout>
    );
}
