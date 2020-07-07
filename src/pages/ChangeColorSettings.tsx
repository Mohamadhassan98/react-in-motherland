import React from "react";
import {Body, Container, Content, Left, List, Right, Text, View} from "native-base";
import MainHeader from "../components/MainHeader";
import * as Localization from "expo-localization";
import Forward from "../../assets/ForwardIcon";
import Back from "../../assets/BackIcon";
import {t} from "i18n-js";
import SettingItem from "../components/SettingItem";
import MenuVerticalIcon from "../../assets/MenuVerticalIcon";
import makeStyles from "../utils/makeStyles";

const useStyles = makeStyles((palette) => ({
    primary: {
        backgroundColor: palette.primary,
        borderRadius: 20,
        height: 20,
        width: 20,
    },
    secondary: {
        backgroundColor: palette.secondary,
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
