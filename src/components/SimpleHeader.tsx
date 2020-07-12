import React from "react";
import {Left, Right, Row, Text} from "native-base";
import Forward from "../../assets/icons/ForwardIcon";
import Back from "../../assets/icons/BackIcon";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";
import useTheme from "../values/theme";

const styles = StyleSheet.create({
    itemsCenter: {
        alignItems: "center",
    },
    root: {
        height: 50,
        width: "100%",
    },
    title: {
        marginStart: 24,
    },
});

export default function ({title, rightAdornment}: {title: string; rightAdornment?: React.ReactElement}) {
    const {
        localize: {language},
    } = useTheme();
    return (
        <Row style={styles.root}>
            <Left>
                <Row style={styles.itemsCenter}>
                    {language === "fa" ? <Forward /> : <Back />}
                    <Text style={styles.title}>{t(title)}</Text>
                </Row>
            </Left>
            <Right>{rightAdornment}</Right>
        </Row>
    );
}
