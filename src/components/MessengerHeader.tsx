import React from "react";
import {Button, Col, Text, Thumbnail, View} from "native-base";
import {t} from "i18n-js";
import makeStyles from "../utils/makeStyles";
import Icons8SearchIcon from "../../assets/icons/SearchIcon";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../values/Routing";

const useStyles = makeStyles((theme) => ({
    backColumn: {
        flex: 2,
    },
    backIcon: {
        alignSelf: "center",
        flex: 2,
    },
    closeColumn: {
        alignItems: "flex-end",
        flex: 2,
    },
    closeIcon: {},
    emptyColumn: {
        flex: 2,
    },
    iconColumn: {
        flex: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    searchColumn: {
        flexGrow: 8,
    },
    titleColumn: {
        flexGrow: 8,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        fontFamily: theme.font.Header,
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
    const styles = useStyles();
    return (
        <View style={{display: "flex", flexDirection: "row"}}>
            <Col style={styles.backIcon}>
                <Thumbnail square style={{width: 30, height: 30}} source={require("../../assets/logo.png")} />
            </Col>
            <Col style={styles.titleColumn}>
                <Text style={styles.titleTextAlign}>{t("chats")}</Text>
            </Col>
            <Col style={styles.iconColumn}>
                <Button
                    small
                    transparent
                    onPress={() => {
                        navigation.navigate("SearchInMessenger", {} as any);
                    }}
                >
                    <Icons8SearchIcon />
                </Button>
            </Col>
        </View>
    );
}
