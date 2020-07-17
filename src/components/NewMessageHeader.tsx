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
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../values/Routing";

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

export default function ({setSearchText,navigation}:{setSearchText:(text: string) => void ;navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;} ) {
    const [search, setSearch] = useState(false);
    const [Stext, setStext] = useState("");
    const theme = useTheme();
    const styles = useStyles();
    return (
        <>

                    <Col style={styles.backIcon}>
                        <Button
                            small
                            transparent
                            onPress={() => {
                                setSearch(false);
                                setStext("");
                                setSearchText("");
                                navigation.canGoBack() && navigation.goBack();
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
                                setSearchText(event);
                            }}
                        />
                    </Col>
                    <Col style={styles.iconColumn}>
                        {Stext.length > 0 && (
                            <Button
                                transparent
                                onPress={() => {
                                    setStext("");
                                    setSearchText("");
                                }}
                            >
                                <DeleteIcon fill='#939191' />
                            </Button>
                        )}
                    </Col>
                </>
    );
}
