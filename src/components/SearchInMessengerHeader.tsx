import React, {useState} from "react";
import {Col, Icon, Text, Input, Button} from "native-base";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";
import {RootStackParamList, StackNavigator} from "../values/Routing";
import Icons8ForwardIcon from "../../assets/icons/ForwardIcon";
import Icons8BackIcon from "../../assets/icons/BackIcon";
import useTheme from "../values/theme";
import makeStyles from "../utils/makeStyles";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import {StackNavigationProp} from "@react-navigation/stack";


const useStyles = makeStyles((theme) => ({
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
        //
        flex: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
}));

export default function ({setSearchText,navigation}:{setSearchText:(text: string) => void ;navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;} ) {
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
                            navigation.navigate("MessengerPage", {} as any);
                        }}
                    ><Icons8ForwardIcon /> </Button> : <Button
                        small
                        transparent
                        onPress={() => {
                            navigation.navigate("MessengerPage", {} as any);
                        }}
                    ><Icons8BackIcon /></Button> }
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
