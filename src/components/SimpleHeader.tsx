import React from "react";
import {Body, Button, Left, Right, Row, Text} from "native-base";
import Forward from "../../assets/icons/ForwardIcon";
import Back from "../../assets/icons/BackIcon";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";
import useTheme from "../values/theme";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../values/Routing";

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    itemsCenter: {
        alignItems: "center",
    },
    itemsStart: {
        alignItems: "flex-start",
    },
    root: {
        height: 50,
        justifyContent: "space-between",
        width: "100%",
    },
    textCenter: {
        textAlign: "center",
    },
});

export default function ({
    title,
    rightAdornment,
    navigation,
    hideBack,
}: {
    title: string;
    rightAdornment?: React.ReactElement;
    navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
    hideBack?: boolean;
}) {
    const {
        localize: {language},
    } = useTheme();
    return (
        <Row style={styles.root}>
            <Left style={[styles.flex, styles.itemsStart]}>
                <Button disabled={hideBack} transparent onPress={() => navigation.canGoBack() && navigation.goBack()}>
                    {language === "fa" ? !hideBack && <Forward /> : !hideBack && <Back />}
                </Button>
            </Left>
            <Body style={[styles.flex, styles.itemsCenter]}>
                <Text style={styles.textCenter}>{t(title)}</Text>
            </Body>
            <Right style={styles.flex}>{rightAdornment}</Right>
        </Row>
    );
}
