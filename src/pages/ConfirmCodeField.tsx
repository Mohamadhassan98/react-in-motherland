import React, {useState} from "react";
import {Alert, Image, SafeAreaView, Text, View} from "react-native";
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from "react-native-confirmation-code-field";
import makeStyles from "../utils/makeStyles";
import {t} from "i18n-js";
import {Button} from "native-base";
import vc from "../../assets/vc.png";
import {StackNavigator} from "../values/Routing";
import useTheme from "../values/theme";

const CELL_COUNT = 4;

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        minHeight: 300,
        marginTop: "50%",
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        fontFamily: theme.font.Body,
    },
    codeFieldRoot: {
        marginTop: 20,
        width: 280,
        marginLeft: "auto",
        marginRight: "auto",
    },
    cellRoot: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    cellText: {
        color: "#000",
        fontSize: 36,
        textAlign: "center",
    },
    focusCell: {
        borderBottomColor: "#007AFF",
        borderBottomWidth: 2,
    },
    button: {
        marginTop: 100,
        borderRadius: 10,
        width: "50%",
        alignSelf: "center",
        justifyContent: "center",
        paddingTop: 0,
        paddingBottom: 0,
        borderColor: "transparent",
    },
    buttonValid: {
        backgroundColor: theme.palette.Primary,
    },
    buttonInvalid: {
        backgroundColor: theme.palette.Disabled,
    },
    text: {
        color: theme.palette.textSecondary,
        fontFamily: theme.font.Body,
    },
    wrongNumber: {
        marginTop: 20,
        alignItems: "center",
    },
    wrongNumberText: {
        textDecorationLine: "underline",
        fontFamily: theme.font.Body,
    },
}));

const ConfirmCodeField = ({navigation, route}: StackNavigator<"ConfirmCodeField">) => {
    const styles = useStyles();
    const theme = useTheme();
    const code = "1234";
    const [value, setValue] = useState("");
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const handleContinuePress = () => {
        if (!value) {
            Alert.alert(t("error"), t("emptyCode"), [
                {
                    text: t("ok"),
                },
            ]);
        } else {
            if (value === code) {
                if (Number(route.params.number.slice(10)) % 2) {
                    theme.auth.login();
                } else {
                    navigation.navigate("CompleteInformation");
                }
            } else {
                Alert.alert(t("error"), t("wrongCode"), [
                    {
                        text: t("ok"),
                    },
                ]);
            }
        }
    };

    return (
        <SafeAreaView style={styles.root}>
            <Image source={vc} style={{width: 100, height: 100, alignSelf: "center", marginBottom: 50}} />
            <View>
                <Text style={styles.title}>{t("enterVerificationCode")}</Text>
                <Text style={{alignSelf: "center"}}>{route.params.number}</Text>
            </View>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={(text) => {
                    if (/^\d*$/.test(text)) {
                        setValue(text);
                    }
                }}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType='number-pad'
                textContentType='oneTimeCode'
                renderCell={({index, symbol, isFocused}) => (
                    <View
                        // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        style={[styles.cellRoot, isFocused && styles.focusCell]}
                    >
                        <Text style={styles.cellText}>{symbol || (isFocused ? <Cursor /> : null)}</Text>
                    </View>
                )}
            />
            <Button
                disabled={value.length !== 4}
                transparent
                onPress={handleContinuePress}
                style={[styles.button, value.length === 4 ? styles.buttonValid : styles.buttonInvalid]}
            >
                <Text style={styles.text}>{t("continue")}</Text>
            </Button>
            <View style={styles.wrongNumber}>
                <Text style={styles.wrongNumberText} onPress={() => navigation.navigate("Login")}>
                    {t("wrongNumber")}
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default ConfirmCodeField;
