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
    const [optimizeImagesToSaveDate, setOptimizeImagesToSaveDate] = useState(false);
    const [privateAccount, setPrivateAccount] = useState(false);
    const [allowSaving, setAllowSaving] = useState(false);
    return (
        <MainPageLayout active={0} navigation={navigation}>
            <MainHeader size='collapsed'>
                <Left style={[styles.flex, styles.itemsStart]}>
                    {/*<Button*/}
                    {/*    style={styles.forwardBackIconStyle}*/}
                    {/*    icon*/}
                    {/*    transparent*/}
                    {/*    onPress={() => navigation.canGoBack() && na}*/}
                    {/*>*/}
                    {/*    {theme.localize.language === "fa" ? <Icons8ForwardIcon /> : <Icons8BackIcon />}*/}
                    {/*</Button>*/}
                </Left>
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
                        scope='editProfile'
                        rightAdornment={
                            <Button
                                transparent
                                onPress={() => {
                                    navigation.navigate("EditProfile");
                                }}
                            >
                                {theme.localize.language === "fa" ? <Icons8BackIcon /> : <Icons8ForwardIcon />}
                            </Button>
                        }
                    />
                    <SettingItem
                        scope='showPostsByPopularity'
                        rightAdornment={
                            <Button
                                transparent
                                onPress={() => {
                                    setShowPostsByPopularity((prevState) => !prevState);
                                }}
                            >
                                {showPostsByPopularity ? (
                                    <Icons8ToggleOffIcon style={styles.icons} />
                                ) : (
                                    <ToggleOnIcon style={styles.icons} />
                                )}
                            </Button>
                        }
                    />
                    <SettingItem
                        scope='optimizeImageToSaveData'
                        rightAdornment={
                            <Button
                                transparent
                                onPress={() => {
                                    setOptimizeImagesToSaveDate((prevState) => !prevState);
                                }}
                            >
                                {optimizeImagesToSaveDate ? (
                                    <Icons8ToggleOffIcon style={styles.icons} />
                                ) : (
                                    <ToggleOnIcon style={styles.icons} />
                                )}
                            </Button>
                        }
                    />
                    <SettingItem
                        scope='languageSettings'
                        rightAdornment={
                            <Button
                                transparent
                                onPress={() => {
                                    navigation.navigate("LanguageSettings");
                                }}
                            >
                                {theme.localize.language === "fa" ? <Icons8BackIcon /> : <Icons8ForwardIcon />}
                            </Button>
                        }
                    />
                    <SettingItem
                        scope='colorSettings'
                        rightAdornment={
                            <Button
                                transparent
                                onPress={() => {
                                    navigation.navigate("ChangeColorSettings");
                                }}
                            >
                                {theme.localize.language === "fa" ? <Icons8BackIcon /> : <Icons8ForwardIcon />}
                            </Button>
                        }
                    />
                    <ListItem itemDivider>
                        <Left>
                            <Text style={styles.dividerStyle}>{t("privacyAndSecurity")}</Text>
                        </Left>
                    </ListItem>
                    <SettingItem
                        scope='privateAccount'
                        note='privateAccountNote'
                        rightAdornment={
                            <Button
                                transparent
                                onPress={() => {
                                    setPrivateAccount((prevState) => !prevState);
                                }}
                            >
                                {privateAccount ? (
                                    <Icons8ToggleOffIcon style={styles.icons} />
                                ) : (
                                    <ToggleOnIcon style={styles.icons} />
                                )}
                            </Button>
                        }
                    />
                    <SettingItem
                        scope='allowSaving'
                        note='allowSavingNote'
                        rightAdornment={
                            <Button
                                transparent
                                onPress={() => {
                                    setAllowSaving((prevState) => !prevState);
                                }}
                            >
                                {allowSaving ? (
                                    <Icons8ToggleOffIcon style={styles.icons} />
                                ) : (
                                    <ToggleOnIcon style={styles.icons} />
                                )}
                            </Button>
                        }
                    />
                </List>
            </Content>
        </MainPageLayout>
    );
}
