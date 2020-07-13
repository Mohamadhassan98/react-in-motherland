import React, {useState} from "react";
import {Body, Button, Content, Left, List, ListItem, Right, Text, View} from "native-base";
import MainHeader from "../components/MainHeader";
import SettingItem from "../components/SettingItem";
import makeStyles from "../utils/makeStyles";
import MainPageLayout from "../components/MainPageLayout";
import * as Localization from "expo-localization";
import Icons8ForwardIcon from "../../assets/icons/ForwardIcon";
import Icons8BackIcon from "../../assets/icons/BackIcon";
import {t} from "i18n-js";
import useTheme from "../values/theme";
import Icons8ToggleOffIcon from "../../assets/icons/ToggleOffIcon";
import ToggleOnIcon from "../../assets/icons/ToggleOnIcon";
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
        // borderWidth: 0,
        // borderBottomWidth: 0,
        // flex: 1,
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
}));

export default function () {
    const styles = useStyles();
    const theme = useTheme();
    const [showPostsByPopularity, setShowPostsByPopularity] = useState<boolean>(false);
    const [optimizeImagesToSaveDate, setOptimizeImagesToSaveDate] = useState<boolean>(false);
    const [privateAccount, setPrivateAccount] = useState<boolean>(false);
    const [allowSaving, setAllowSaving] = useState<boolean>(false);
    return (
        <MainPageLayout active={0}>
            <MainHeader size='collapsed'>
                <Left style={{flex: 1, alignItems: "flex-start"}}>
                    <Button style={styles.forwardBackIconStyle} icon transparent>
                        {theme.localize.language === "fa" ? <Icons8ForwardIcon /> : <Icons8BackIcon />}
                    </Button>
                </Left>
                <Body style={{flex: 1, alignItems: "center"}}>
                    <Text style={styles.headerTextStyle}>{t("settings")} </Text>
                </Body>
                <Right style={{flex: 1}} />
            </MainHeader>
            <Content>
                <List>
                    <ListItem itemDivider>
                        <Left>
                            <Text style={styles.dividerStyle}>{t("generalSettings")}</Text>
                        </Left>
                    </ListItem>
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
                                    <Icons8ToggleOffIcon style={{width: 48, height: 48}} />
                                ) : (
                                    <ToggleOnIcon style={{width: 48, height: 48}} />
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
                                    <Icons8ToggleOffIcon style={{width: 48, height: 48}} />
                                ) : (
                                    <ToggleOnIcon style={{width: 48, height: 48}} />
                                )}
                            </Button>
                        }
                    />
                    <SettingItem
                        scope='colorSettings'
                        rightAdornment={
                            <Button transparent onPress={() => {}}>
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
                                    <Icons8ToggleOffIcon style={{width: 48, height: 48}} />
                                ) : (
                                    <ToggleOnIcon style={{width: 48, height: 48}} />
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
                                    <Icons8ToggleOffIcon style={{width: 48, height: 48}} />
                                ) : (
                                    <ToggleOnIcon style={{width: 48, height: 48}} />
                                )}
                            </Button>
                        }
                    />
                </List>
            </Content>
        </MainPageLayout>
    );
}
