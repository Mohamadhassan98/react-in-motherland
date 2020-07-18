import React from "react";
import {Button, Col, Text} from "native-base";
import {t} from "i18n-js";
import Icons8ForwardIcon from "../../assets/icons/ForwardIcon";
import Icons8BackIcon from "../../assets/icons/BackIcon";
import useTheme from "../values/theme";
import makeStyles from "../utils/makeStyles";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../values/Routing";

const useStyles = makeStyles((theme) => ({
    backColumn: {},
    backIcon: {
        flex: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    closeColumn: {
        alignItems: "flex-end",
        flex: 2,
        right: "10%",
    },
    closeIcon: {
        alignSelf: "flex-end",
    },
    emptyColumn: {
        flex: 2,
    },
    iconColumn: {
        alignItems: "flex-end",
        flex: 2,
        right: "10%",
    },
    searchColumn: {
        flexGrow: 8,
    },
    titleColumn: {
        flexGrow: 8,
    },
    titleTextAlign: {
        textAlign: "center",
        fontFamily: theme.font.Header,
    },
}));

export default function ({
    navigation,
}: {
    navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}) {
    const theme = useTheme();
    const styles = useStyles();
    return (
        <>
            <Col style={styles.backIcon}>
                <Button small transparent onPress={() => navigation.canGoBack() && navigation.goBack()}>
                    {theme.localize.language === "fa" ? <Icons8ForwardIcon /> : <Icons8BackIcon />}
                </Button>
            </Col>
            <Col style={styles.titleColumn}>
                <Text style={styles.titleTextAlign}>{t("newGroup")}</Text>
            </Col>
            <Col style={styles.iconColumn} />
        </>
    );
}
