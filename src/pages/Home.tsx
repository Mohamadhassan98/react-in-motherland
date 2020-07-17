import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import PersonalUserInfo from "../components/PersonalUserInfo";
import {Button, Content, Fab, Tab, Tabs, View} from "native-base";
import PersonalPageBio from "../components/PersonalPageBio";
import PersonalPageRecommends from "../components/PersonalPageRecommends";
import makeStyles from "../utils/makeStyles";
import {StackNavigator} from "../values/Routing";
import Icons8GoogleImagesIcon from "../../assets/icons/GoogleImagesIcon";
import CommonColors from "../../native-base-theme/variables/commonColor";
import {t} from "i18n-js";
import ExplorePosts from "../components/ExplorePosts";
import SimpleHeader from "../components/SimpleHeader";
import Icons8RegistrationIcon from "../../assets/icons/RegistrationIcon";
import ExploreChannels from "../components/ExploreChannels";

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
}));

export default function ({navigation, route}: StackNavigator<"Home">) {
    const styles = useStyles();
    const {bio, you} = route.params;
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
                <PersonalUserInfo navigation={navigation} {...route.params} />
                <PersonalPageBio bio={bio} />
                <PersonalPageRecommends
                    images={new Array(5).fill(
                        "https://upload.wikimedia.org/wikipedia/commons/1/16/Mike_Pompeo_official_photo.jpg"
                    )}
                />
                <Tabs
                    tabContainerStyle={styles.tabContainer}
                    tabBarUnderlineStyle={styles.underline}
                    tabBarActiveTextColor={CommonColors.inverseTextColor}
                >
                    <Tab
                        heading={t("channelPosts")}
                        tabStyle={styles.tabs}
                        activeTabStyle={styles.activeTab}
                        textStyle={styles.tabsText}
                        activeTextStyle={styles.activeTabText}
                    >
                        <Content>
                            <ExploreChannels navigation={navigation} />
                        </Content>
                    </Tab>
                    <Tab
                        heading={t("pages")}
                        tabStyle={styles.tabs}
                        activeTabStyle={styles.activeTab}
                        textStyle={styles.tabsText}
                        activeTextStyle={styles.activeTabText}
                    >
                        <Content>
                            <ExplorePosts navigation={navigation} />
                        </Content>
                    </Tab>
                </Tabs>
                <Fab
                    position='bottomRight'
                    style={styles.fabButton}
                    onPress={() => {
                        navigation.navigate("NewPost");
                    }}
                >
                    <Icons8GoogleImagesIcon />
                </Fab>
            </View>
        </MainPageLayout>
    );
}
