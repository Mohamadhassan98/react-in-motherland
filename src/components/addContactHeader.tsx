import React, {useState} from "react";
import {Button, Col, Icon, Input, Text} from "native-base";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";
import Icons8ForwardIcon from "../../assets/icons/ForwardIcon";
import Icons8BackIcon from "../../assets/icons/BackIcon";
import useTheme from "../values/theme";
import makeStyles from "../utils/makeStyles";
import Icons8SearchIcon from "../../assets/icons/SearchIcon";
import DeleteIcon from "../../assets/icons/DeleteIcon";

const useStyles = makeStyles((theme) => ({
    backColumn: {
        flex: 2,
    },
    backIcon: {
        alignSelf: "center",
    },
    closeColumn: {
        alignItems: "flex-end",
        flex: 2,
        right: "10%",
    },
    closeIcon: {},
    emptyColumn: {
        flex: 2,
    },
    iconColumn: {
        flex: 1,
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
    },
    titleTextAlign: {
        textAlign: "center",
        fontFamily: theme.font.Header,
    },
}));

export default function () {
    const [search, setSearch] = useState(false);
    const [Stext, setStext] = useState("");
    const theme = useTheme();
    const styles = useStyles();
    return (
        <>
            <Col style={styles.backIcon}>
                {theme.localize.language === "fa" ? <Icons8ForwardIcon /> : <Icons8BackIcon />}
            </Col>
            <Col style={styles.titleColumn}>
                <Text style={styles.titleTextAlign}>{t("addContact")}</Text>
            </Col>
            <Col style={styles.iconColumn}></Col>
        </>
    );
}
