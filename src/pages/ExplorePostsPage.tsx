import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import ExploreHeader from "../components/ExploreHeader";
import {Content, Tab, Tabs} from "native-base";
import {t} from "i18n-js";
import ExplorePosts from "../components/ExplorePosts";
import {StyleSheet} from "react-native";
import CommonColors from "../../native-base-theme/variables/commonColor";

const styles = StyleSheet.create({
    activeTab: {
        backgroundColor: CommonColors.brandPrimary,
    },
    tabs: {
        backgroundColor: "rgba(233, 68, 106, 0.85)",
    },
    underline: {
        backgroundColor: CommonColors.inverseTextColor,
    },
});

export default function () {
    return (
        <MainPageLayout active={1}>
            <MainHeader hasTabs size='collapsed'>
                <ExploreHeader />
            </MainHeader>
            <Tabs tabBarUnderlineStyle={styles.underline} tabBarActiveTextColor={CommonColors.inverseTextColor}>
                <Tab heading={t("allPosts")} tabStyle={styles.tabs} activeTabStyle={styles.activeTab}>
                    <Content>
                        <ExplorePosts />
                    </Content>
                </Tab>
                <Tab heading={t("pages")} tabStyle={styles.tabs} activeTabStyle={styles.activeTab}>
                    <Content>
                        <ExplorePosts />
                    </Content>
                </Tab>
            </Tabs>
        </MainPageLayout>
    );
}
