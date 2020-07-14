import React, {useState} from "react";
import {Image, SafeAreaView, Text, View} from "react-native";
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from "react-native-confirmation-code-field";
import makeStyles from "../utils/makeStyles";
import {t} from "i18n-js";
import useTheme from "../values/theme";
import {Button, Thumbnail} from "native-base";
import vc from "../../assets/vc.png";
import {StackNavigator} from "../values/Routing";

const CELL_COUNT = 4;

const useStyles = makeStyles((theme) => ({
    root: {padding: 20, minHeight: 300, marginTop: "50%"},
    title: {textAlign: "center", fontSize: 30},
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
        color: theme.palette.Primary,
        width: "50%",
        alignSelf: "center",
        justifyContent: "center",
    },
    text: {
        color: theme.palette.textSecondary,
    },
    wrongNumber: {marginTop: 20, alignItems: "center"},
}));
const ConfirmCodeField = ({navigation, route}: StackNavigator<"ConfirmCodeField">) => {
    const styles = useStyles();
    const code = "1234";
    const theme = useTheme();
    const [value, setValue] = useState("");
    const [errorText, setErrorText] = useState("");
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const handleContinuePress = () => {
        setErrorText("");
        if (!value) {
            if (theme.localize.language === "fa") {
                alert(t("emptyCode"));
            } else {
                alert("Code can not be empty");
            }
        } else {
            if (value === code) {
                navigation.navigate("Home");
            } else {
                if (theme.localize.language === "fa") {
                    alert(t("wrongCode"));
                } else {
                    alert("Code is wrong!");
                }
            }
        }
    };

    return (
        <SafeAreaView style={styles.root}>
            <Image source={vc} style={{width: 100, height: 100, alignSelf: "center", marginBottom: 50}} />
            {theme.localize.language === "fa" ? (
                <View>
                    <Text style={styles.title}>{t("EnterCode")}</Text>
                    <Text style={{alignSelf: "center"}}>{route.params.number}</Text>
                </View>
            ) : (
                <View>
                    <Text style={styles.title}>Enter verification code</Text>
                    <Text style={{alignSelf: "center"}}>{route.params.number}</Text>
                </View>
            )}
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
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

            <Button onPress={handleContinuePress} style={styles.button}>
                {theme.localize.language === "fa" ? (
                    <Text style={styles.text}>{t("continue")}?</Text>
                ) : (
                    <Text style={styles.text}>Continue</Text>
                )}
            </Button>
            <View style={styles.wrongNumber}>
                {theme.localize.language === "fa" ? (
                    <Text style={{textDecorationLine: "underline"}} onPress={() => navigation.navigate("Login")}>
                        {t("wrongNumber")}?
                    </Text>
                ) : (
                    <Text style={{textDecorationLine: "underline"}} onPress={() => navigation.navigate("Login")}>
                        Wrong number?
                    </Text>
                )}
            </View>
        </SafeAreaView>
    );
};

export default ConfirmCodeField;
