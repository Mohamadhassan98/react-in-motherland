import React from "react";
import {Body, Container, Content, Left, List, Right, Text, View} from "native-base";
import MainHeader from "../components/MainHeader";
import * as Localization from "expo-localization";
import Forward from "../../assets/icons/ForwardIcon";
import Back from "../../assets/icons/BackIcon";
import {t} from "i18n-js";
import SettingItem from "../components/SettingItem";
import MenuVerticalIcon from "../../assets/icons/MenuVerticalIcon";
import makeStyles from "../utils/makeStyles";
const useStyles = makeStyles((theme) => ({
    primary: {
        backgroundColor: theme.palette.primary,
        borderRadius: 20,
        height: 20,
        width: 20,
    },
    secondary: {
        backgroundColor: theme.palette.secondary,
        borderRadius: 20,
        height: 20,
        width: 20,
    },
}));

export default function () {
    const styles = useStyles();
    return (
        <Container>
            <MainHeader size='collapsed'>
                <Left>{Localization.isRTL ? <Forward /> : <Back />}</Left>
                <Body>
                    <Text>{t("colorSettings")}</Text>
                </Body>
                <Right>
                    <MenuVerticalIcon />
                </Right>
            </MainHeader>
            <Content>
                <List>
                    <SettingItem scope='primary' rightAdornment={<View style={styles.primary} />} />
                    <SettingItem scope='secondary' rightAdornment={<View style={styles.secondary} />} />
                </List>
            </Content>
        </Container>
    );
}
