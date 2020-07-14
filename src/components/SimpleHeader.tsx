import React from "react";
import {Button, Left, Right, Row, Text} from "native-base";
import Forward from "../../assets/icons/ForwardIcon";
import Back from "../../assets/icons/BackIcon";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";
import useTheme from "../values/theme";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../values/Routing";

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
            <Left>
                <Row style={styles.itemsCenter}>
                    <Button
                        disabled={hideBack}
                        transparent
                        onPress={() => navigation.canGoBack() && navigation.goBack()}
                    >
                        {language === "fa" ? !hideBack && <Forward /> : !hideBack && <Back />}
                    </Button>
                    <Text style={styles.title}>{t(title)}</Text>
                </Row>
            </Left>
            <Right>{rightAdornment}</Right>
        </Row>
    );
}
