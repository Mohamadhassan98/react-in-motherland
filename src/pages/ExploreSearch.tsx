import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import SimpleHeader from "../components/SimpleHeader";
import {Content, Grid, Input, Item, Row, Tab, Tabs} from "native-base";
import {t} from "i18n-js";
import Icons8SearchIcon from "../../assets/icons/SearchIcon";
import CommonColors from "../../native-base-theme/variables/commonColor";
import ExplorePosts from "../components/ExplorePosts";
import ExploreChannels from "../components/ExploreChannels";
import makeStyles from "../utils/makeStyles";

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
    search: {
        width: "100%",
        height: 50,
    },
    header: {
        height: 100,
    },
    tabContainer: {
        backgroundColor: "transparent",
    },
    inputText: {
        fontFamily: theme.font.Body,
    },
}));

export default function () {
    const styles = useStyles();
    return (
        <MainPageLayout active={1}>
            <MainHeader size='collapsed' hasTabs style={styles.header}>
                <Grid>
                    <Row>
                        <SimpleHeader title='search' />
                    </Row>
                    <Row>
                        <Item underline style={styles.search}>
                            <Icons8SearchIcon />
                            <Input style={styles.inputText} placeholder={t("searchForTagsNamesAndContent")} />
                        </Item>
                    </Row>
                </Grid>
            </MainHeader>
            <Tabs
                tabContainerStyle={styles.tabContainer}
                tabBarUnderlineStyle={styles.underline}
                tabBarActiveTextColor={CommonColors.inverseTextColor}
            >
                <Tab heading={t("channelPosts")} tabStyle={styles.tabs} activeTabStyle={styles.activeTab}>
                    <Content>
                        <ExploreChannels />
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
