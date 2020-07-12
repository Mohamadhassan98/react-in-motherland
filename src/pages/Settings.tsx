import React, {useState} from "react";
import {Body, Button, Content, Left, List, ListItem, Right, Text, View} from "native-base";
import MainHeader from "../components/MainHeader";
import SettingItem from "../components/SettingItem";
import MenuVerticalIcon from "../../assets/icons/MenuVerticalIcon";
import makeStyles from "../utils/makeStyles";
import SimpleHeader from "../components/SimpleHeader";
import MainPageLayout from "../components/MainPageLayout";
import * as Localization from "expo-localization";
import Icons8ForwardIcon from "../../assets/icons/ForwardIcon";
import Icons8BackIcon from "../../assets/icons/BackIcon";
import {t} from "i18n-js";
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
    const [showRelevantFirst, setShowRelevantFirst] = useState<boolean>(false);
    const [optimizeImagesToSaveDate, setOptimizeImagesToSaveDate] = useState<boolean>(false);
    const [colorSettings, setColorSettings] = useState<boolean>(false);
    const [privateAccount, setPrivateAccount] = useState<boolean>(false);
    const [allowingSaving, setAllowingSaving] = useState<boolean>(false);
    return (
        <MainPageLayout active={3}>
            <MainHeader size='collapsed'>
                {/*<Content>*/}
                <Left style={{flex: 1, alignItems: "flex-start"}}>
                    <Button style={styles.forwardBackIconStyle} icon transparent>
                        {Localization.isRTL ? <Icons8ForwardIcon /> : <Icons8BackIcon />}
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
                            <Text style={styles.dividerStyle}>{t("memorySettings")}</Text>
                        </Left>
                    </ListItem>
                    <SettingItem scope='primary' rightAdornment={<View style={styles.primary} />} />
                    <SettingItem scope='secondary' rightAdornment={<View style={styles.secondary} />} />
                    <ListItem itemDivider>
                        <Left>
                            <Text style={styles.dividerStyle}>{t("privacyAndSecurity")}</Text>
                        </Left>
                    </ListItem>
                </List>
            </Content>
        </MainPageLayout>
    );
}
