import React, {useState} from "react";
import {Button, Col, Icon, Input, Text} from "native-base";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";
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
        fontFamily:theme.font.Header,
    },
}));

export default function ({navigation}:{navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;} ) {
    const [search, setSearch] = useState(false);
    const [Stext, setStext] = useState("");
    const theme = useTheme();
    const styles = useStyles();
    return (
        <>
            <Col style={styles.backIcon}>
                {

                    theme.localize.language === "fa" ? <Button
                        small
                        transparent
                        onPress={() => {
                            navigation.canGoBack() && navigation.goBack();
                        }}
                    ><Icons8ForwardIcon /> </Button> : <Button
                        small
                        transparent
                        onPress={() => {
                            navigation.canGoBack() && navigation.goBack();
                        }}
                    ><Icons8BackIcon /></Button> }
            </Col>
            <Col style={styles.titleColumn}>
                <Text style={styles.titleTextAlign}>{t("newGroup")}</Text>
            </Col>
            <Col style={styles.iconColumn}></Col>
        </>
    );
}
