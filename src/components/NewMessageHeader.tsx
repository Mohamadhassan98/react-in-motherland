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
        //alignSelf: "center",
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
    closeIcon: {},
    emptyColumn: {
        flex: 2,
    },
    iconColumn: {
        //
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
    },
    titleTextAlign: {
        textAlign: "center",
        fontFamily: theme.font.Header,
    },
}));

export default function (props: {setSearchText: (text: string) => void}) {
    const [search, setSearch] = useState(false);
    const [Stext, setStext] = useState("");
    const theme = useTheme();
    const styles = useStyles();
    return (
        <>
            {search === false ? (
                <>
                    <Col style={styles.backIcon}>
                        {

                            theme.localize.language === "fa" ? <Button
                                small
                                transparent
                                onPress={() => {
                                    setSearch(true);
                                }}
                            ><Icons8ForwardIcon /> </Button> : <Button
                                    small
                                    transparent
                                    onPress={() => {
                                        setSearch(true);
                                    }}
                                ><Icons8BackIcon /></Button> }
                    </Col>
                    <Col style={styles.titleColumn}>
                        <Text style={styles.titleTextAlign}>{t("newMessage")}</Text>
                    </Col>
                    <Col style={styles.iconColumn}>
                        <Button
                            small
                            transparent
                            onPress={() => {
                                setSearch(true);
                            }}
                        >
                            <Icons8SearchIcon />
                        </Button>
                    </Col>
                </>
            ) : (
                <>
                    <Col style={styles.backIcon}>
                        <Button
                            small
                            transparent
                            onPress={() => {
                                setSearch(false);
                                setStext("");
                                props.setSearchText("");
                                {/*
                                    navigation.canGoBack() && navigation.goBack();
                                    */
                                }
                            }}
                        >
                            {theme.localize.language === "fa" ? <Icons8ForwardIcon /> : <Icons8BackIcon />}
                        </Button>
                    </Col>
                    <Col style={styles.searchColumn}>
                        <Input
                            value={Stext}
                            placeholder={t("search")}
                            onChangeText={(event) => {
                                setStext(event);
                                props.setSearchText(event);
                            }}
                        />
                    </Col>
                    <Col style={styles.iconColumn}>
                        {Stext.length > 0 && (
                            <Button
                                transparent
                                onPress={() => {
                                    setStext("");
                                    props.setSearchText("");
                                }}
                            >
                                <DeleteIcon fill='#939191' />
                            </Button>
                        )}
                    </Col>
                </>
            )}
        </>
    );
}
