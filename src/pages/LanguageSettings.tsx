import React from "react";
import {Button, Container, Content, List, Text} from "native-base";
import MainHeader from "../components/MainHeader";
import SimpleHeader from "../components/SimpleHeader";
import SettingItem from "../components/SettingItem";
import useTheme from "../values/theme";
import {t} from "i18n-js";
import {Alert} from "react-native";
import {Restart} from "fiction-expo-restart";
import makeStyles from "../utils/makeStyles";

const useStyles = makeStyles((theme) => ({
    saveButton: {
        color: theme.palette.textPrimary,
    },
}));

export default function () {
    const {
        localize: {language, isSystemDefault, setLanguage},
    } = useTheme();
    const styles = useStyles();
    const [newLanguage, setNewLanguage] = React.useState<string | null>(isSystemDefault ? null : language);
    return (
        <Container>
            <MainHeader size='collapsed'>
                <SimpleHeader
                    title='language'
                    rightAdornment={
                        <Button
                            transparent
                            onPress={() => {
                                if ((!newLanguage && !isSystemDefault) || (newLanguage && newLanguage !== language)) {
                                    setLanguage(newLanguage).then(() => {
                                        Alert.alert(t("languageChange"), t("languageChanged"), [
                                            {
                                                text: t("restartNow"),
                                                onPress: () => Restart(),
                                            },
                                            {
                                                text: t("later"),
                                                onPress: () => {
                                                    // Todo navigate to somewhere
                                                },
                                                style: "cancel",
                                            },
                                        ]);
                                    });
                                }
                            }}
                        >
                            <Text style={styles.saveButton}>{t("save")}</Text>
                        </Button>
                    }
                />
            </MainHeader>
            <Content>
                <List>
                    <SettingItem scope='systemDefault' onClick={() => setNewLanguage(null)} selected={!newLanguage} />
                    <SettingItem scope='persian' onClick={() => setNewLanguage("fa")} selected={newLanguage === "fa"} />
                    <SettingItem scope='english' onClick={() => setNewLanguage("en")} selected={newLanguage === "en"} />
                </List>
            </Content>
        </Container>
    );
}
