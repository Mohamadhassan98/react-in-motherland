import React from "react";
import {Body, Left, Right, Row, Text} from "native-base";
import Forward from "../../assets/icons/ForwardIcon";
import Back from "../../assets/icons/BackIcon";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";
import useTheme from "../values/theme";

const styles = StyleSheet.create({
    root: {
        height: 50,
        width: "100%",
    },
});

export default function ({title, rightAdornment}: {title: string; rightAdornment?: React.ReactElement}) {
    const {
        localize: {language},
    } = useTheme();
    return (
        <Row style={styles.root}>
            <Left>{language === "fa" ? <Forward /> : <Back />}</Left>
            <Body>
                <Text>{t(title)}</Text>
            </Body>
            <Right>{rightAdornment}</Right>
        </Row>
    );
}
