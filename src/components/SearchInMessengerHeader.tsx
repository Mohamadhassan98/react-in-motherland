import React from "react";
import {Button, Col, Input} from "native-base";
import {t} from "i18n-js";
import {RootStackParamList} from "../values/Routing";
import Icons8ForwardIcon from "../../assets/icons/ForwardIcon";
import Icons8BackIcon from "../../assets/icons/BackIcon";
import useTheme from "../values/theme";
import makeStyles from "../utils/makeStyles";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import {StackNavigationProp} from "@react-navigation/stack";

const useStyles = makeStyles(() => ({
    backIcon: {
        flex: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    closeColumn: {
        flex: 2,
    },
    closeIcon: {
        alignSelf: "flex-end",
    },
    searchColumn: {
        flexGrow: 8,
    },
    iconColumn: {
        flex: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
}));

export default function ({
    setSearchText,
    navigation,
    searchText,
}: {
    setSearchText: (text: string | undefined) => void;
    searchText: string | undefined;
    navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}) {
    const theme = useTheme();
    const styles = useStyles();
    return (
        <>
            <Col style={styles.backIcon}>
                <Button
                    small
                    transparent
                    onPress={() => {
                        navigation.canGoBack() && navigation.goBack();
                    }}
                >
                    {theme.localize.language === "fa" ? <Icons8ForwardIcon /> : <Icons8BackIcon />}
                </Button>
            </Col>
            <Col style={styles.searchColumn}>
                <Input
                    value={searchText}
                    placeholder={t("search")}
                    onChangeText={(event) => {
                        setSearchText(event);
                    }}
                />
            </Col>
            <Col style={styles.iconColumn}>
                {!!searchText && searchText.length > 0 && (
                    <Button
                        transparent
                        onPress={() => {
                            setSearchText(undefined);
                        }}
                    >
                        <DeleteIcon fill='#939191' />
                    </Button>
                )}
            </Col>
        </>
    );
}
