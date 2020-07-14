import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import {Content, Tab, Tabs, Button} from "native-base";
import {t} from "i18n-js";
import ExplorePosts from "../components/ExplorePosts";
import CommonColors from "../../native-base-theme/variables/commonColor";
import ExploreChannels from "../components/ExploreChannels";
import SimpleHeader from "../components/SimpleHeader";
import Icons8SearchIcon from "../../assets/icons/SearchIcon";
import makeStyles from "../utils/makeStyles";
import {copilot} from "react-native-copilot";
import {StackNavigator} from "../values/Routing";
import {CopilotTypes} from "../components/types/copilotTypes";

const useStyles = makeStyles((theme) => ({
    activeTab: {
        backgroundColor: theme.palette.Primary,
    },
    tabs: {
        backgroundColor: theme.palette.primary.light,
    },
    underline: {
        backgroundColor: theme.palette.textSecondary,
    },
    tabContainer: {
        backgroundColor: "transparent",
    },
}));

function ExplorePostsPage({navigation, start, copilotEvents}: StackNavigator<"ExplorePostsPage"> & CopilotTypes) {
    const styles = useStyles();
    return (
        <MainPageLayout active={1} navigation={navigation} copilotEvents={copilotEvents} start={start}>
            <MainHeader hasTabs size='collapsed'>
                <SimpleHeader
                    title='explore'
                    rightAdornment={
                        <Button
                            transparent
                            onPress={() => {
                                navigation.navigate("ExploreSearch");
                            }}
                        >
                            <Icons8SearchIcon />
                        </Button>
                    }
                    hideBack
                    navigation={navigation}
                />
            </MainHeader>
            <Tabs
                tabContainerStyle={styles.tabContainer}
                tabBarUnderlineStyle={styles.underline}
                tabBarActiveTextColor={CommonColors.inverseTextColor}
            >
                <Tab heading={t("allPosts")} tabStyle={styles.tabs} activeTabStyle={styles.activeTab}>
                    <Content>
                        <ExplorePosts navigation={navigation} />
                    </Content>
                </Tab>
                <Tab heading={t("channelPosts")} tabStyle={styles.tabs} activeTabStyle={styles.activeTab}>
                    <Content>
                        <ExploreChannels />
                    </Content>
                </Tab>
                <Tab heading={t("pages")} tabStyle={styles.tabs} activeTabStyle={styles.activeTab}>
                    <Content>
                        <ExplorePosts navigation={navigation} />
                    </Content>
                </Tab>
            </Tabs>
        </MainPageLayout>
    );
}

export default copilot({
    animated: true,
    overlay: "svg",
    androidStatusBarVisible: true,
    labels: {previous: t("previous"), next: t("next"), skip: t("skip"), finish: t("finish")},
})(ExplorePostsPage as any);
