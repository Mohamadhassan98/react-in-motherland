import React, {useState} from "react";
import {Button, Col, Icon, Input, Left, Text, Thumbnail, View} from "native-base";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";
import Icons8ForwardIcon from "../../assets/icons/ForwardIcon";
import Icons8BackIcon from "../../assets/icons/BackIcon";
import useTheme from "../values/theme";
import makeStyles from "../utils/makeStyles";
import Icons8SearchIcon from "../../assets/icons/SearchIcon";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import {MainPageLayoutProps} from "./types/MainPageLayoutProps";
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
        fontFamily:theme.font.Header,
    },
    titleTextAlign: {
        textAlign: "center",
        fontFamily: theme.font.Header,
    },
}));

export default function ({navigation}:{navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;}) {
    const [search, setSearch] = useState(false);
    const [Stext, setStext] = useState("");
    const theme = useTheme();
    const styles = useStyles();
    return (
        <View style={{display: "flex", flexDirection: "row"}}>
            <Col style={styles.backIcon}>
                <Thumbnail square style={{width:30, height:30}} source={require("../../assets/images/logo.png")} />
            </Col>
            <Col style={styles.titleColumn}>
                <Text style={styles.titleTextAlign}>{t("chats")}</Text>
            </Col>
            <Col style={styles.iconColumn}>
                <Button
                    small
                    transparent
                    onPress={() => {
                        setSearch(true);
                        navigation.navigate("SearchInMessenger", {} as any);
                    }}
                >
                    <Icons8SearchIcon />
                </Button>
            </Col>
        </View>
    );
}
