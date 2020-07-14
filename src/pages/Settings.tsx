import React, {useState} from "react";
import {Body, Button, Content, Left, List, ListItem, Right, Text} from "native-base";
import MainHeader from "../components/MainHeader";
import SettingItem from "../components/SettingItem";
import makeStyles from "../utils/makeStyles";
import MainPageLayout from "../components/MainPageLayout";
import Icons8ForwardIcon from "../../assets/icons/ForwardIcon";
import Icons8BackIcon from "../../assets/icons/BackIcon";
import {t} from "i18n-js";
import useTheme from "../values/theme";
import Icons8ToggleOffIcon from "../../assets/icons/ToggleOffIcon";
import ToggleOnIcon from "../../assets/icons/ToggleOnIcon";
import {StackNavigator} from "../values/Routing";

const useStyles = makeStyles((theme) => ({
    primary: {
        backgroundColor: theme.palette.Primary,
        borderRadius: 20,
        height: 20,
        width: 20,
    },
    secondary: {
        backgroundColor: theme.palette.Secondary,
        borderRadius: 20,
        height: 20,
        width: 20,
    },
    forwardBackIconStyle: {
        backgroundColor: "#FFFFFF",
    },
    headerTextStyle: {
        fontFamily: theme.font.Body,
        fontSize: 20,
    },
    dividerStyle: {
        fontFamily: theme.font.Body,
        fontSize: 12,
    },
    flex: {
        flex: 1,
    },
    itemsStart: {
        alignItems: "flex-start",
    },
    itemsCenter: {
        alignItems: "center",
    },
    icons: {
        width: 48,
        height: 48,
    },
}));

export default function ({navigation}: StackNavigator<"Settings">) {
    const styles = useStyles();
    const theme = useTheme();
    const [showPostsByPopularity, setShowPostsByPopularity] = useState(false);
    const [optimizeImagesToSaveDate, setOptimizeImagesToSaveDate] = useState(true);
    const [privateAccount, setPrivateAccount] = useState(true);
    const [allowSaving, setAllowSaving] = useState(false);
    return (
        <MainPageLayout active={0} navigation={navigation}>
            <MainHeader size='collapsed'>
                <Left style={[styles.flex, styles.itemsStart]}></Left>
                <Body style={[styles.flex, styles.itemsCenter]}>
                    <Text style={styles.headerTextStyle}>{t("settings")} </Text>
                </Body>
                <Right style={styles.flex} />
            </MainHeader>
            <Content>
                <List>
                    <ListItem itemDivider>
                        <Left>
                            <Text style={styles.dividerStyle}>{t("generalSettings")}</Text>
                        </Left>
                    </ListItem>
                    <SettingItem
                        onClick={() => {
                            navigation.navigate("EditProfile");
                        }}
                        scope='editProfile'
                        rightAdornment={theme.localize.language === "fa" ? <Icons8BackIcon /> : <Icons8ForwardIcon />}
                    />
                    <SettingItem
                        scope='showPostsByPopularity'
                        onClick={() => {
                            setShowPostsByPopularity((prevState) => !prevState);
                        }}
                        rightAdornment={
                            showPostsByPopularity ? (
                                <Icons8ToggleOffIcon style={styles.icons} />
                            ) : (
                                <ToggleOnIcon style={styles.icons} />
                            )
                        }
                    />
                    <SettingItem
                        scope='optimizeImageToSaveData'
                        onClick={() => {
                            setOptimizeImagesToSaveDate((prevState) => !prevState);
                        }}
                        rightAdornment={
                            optimizeImagesToSaveDate ? (
                                <Icons8ToggleOffIcon style={styles.icons} />
                            ) : (
                                <ToggleOnIcon style={styles.icons} />
                            )
                        }
                    />
                    <SettingItem
                        scope='languageSettings'
                        onClick={() => {
                            navigation.navigate("LanguageSettings");
                        }}
                        rightAdornment={theme.localize.language === "fa" ? <Icons8BackIcon /> : <Icons8ForwardIcon />}
                    />
                    <SettingItem
                        scope='colorSettings'
                        onClick={() => {
                            navigation.navigate("ChangeColorSettings");
                        }}
                        rightAdornment={theme.localize.language === "fa" ? <Icons8BackIcon /> : <Icons8ForwardIcon />}
                    />
                    <ListItem itemDivider>
                        <Left>
                            <Text style={styles.dividerStyle}>{t("privacyAndSecurity")}</Text>
                        </Left>
                    </ListItem>
                    <SettingItem
                        scope='privateAccount'
                        note='privateAccountNote'
                        onClick={() => {
                            setPrivateAccount((prevState) => !prevState);
                        }}
                        rightAdornment={
                            privateAccount ? (
                                <Icons8ToggleOffIcon style={styles.icons} />
                            ) : (
                                <ToggleOnIcon style={styles.icons} />
                            )
                        }
                    />
                    <SettingItem
                        scope='allowSaving'
                        note='allowSavingNote'
                        onClick={() => {
                            setAllowSaving((prevState) => !prevState);
                        }}
                        rightAdornment={
                            allowSaving ? (
                                <Icons8ToggleOffIcon style={styles.icons} />
                            ) : (
                                <ToggleOnIcon style={styles.icons} />
                            )
                        }
                    />
                </List>
            </Content>
        </MainPageLayout>
    );
}
