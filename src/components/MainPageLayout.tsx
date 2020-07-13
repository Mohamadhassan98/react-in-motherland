import React from "react";
import {Button, Container, Footer, FooterTab} from "native-base";
import commonColor from "../../native-base-theme/variables/commonColor";
import Icons8CaretakerIcon from "../../assets/icons/CaretakerIcon";
import Icons8MessagingIcon from "../../assets/icons/MessagingIcon";
import Icons8TelescopeIcon from "../../assets/icons/TelescopeIcon";
import Icons8SettingsIcon from "../../assets/icons/SettingsIcon";
import makeStyles from "../utils/makeStyles";
import {CopilotStep, walkthroughable} from "react-native-copilot";
import {AsyncStorage, View} from "react-native";

const useStyles = makeStyles((theme) => ({
    activeButton: {
        backgroundColor: theme.palette.Primary,
        height: 60,
        width: "100%",
    },
    button: {
        height: 60,
        flex: 1,
        backgroundColor: "transparent",
    },
    container: {
        backgroundColor: theme.palette.textSecondary,
    },
    footer: {
        backgroundColor: commonColor.footerDefaultBg,
        height: 60,
    },
    icon: {
        height: 32,
        width: 32,
    },
    textStyle: {
        color: theme.palette.textPrimary,
        paddingLeft: 0,
        paddingRight: 0,
    },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
}));

const CopilotView = walkthroughable(View);

export default function ({
    children,
    active,
    start,
    copilotEvents,
}: {
    children: React.ReactElement[];
    active: number;
    start?: () => void;
    copilotEvents?: {
        on: (handlerName: string, callback: (step?: number) => void) => void;
        off: (handlerName: string) => void;
    };
}) {
    const styles = useStyles();
    React.useEffect(() => {
        (async () => {
            const finished = await AsyncStorage.getItem("TourFinished");
            if (finished !== "true") {
                copilotEvents?.on("stop", () => {
                    AsyncStorage.setItem("tourFinished", "true");
                });
                start?.();
                return () => {
                    copilotEvents?.off("stop");
                };
            }
            return undefined;
        })();
    }, []);
    return (
        <Container style={styles.container}>
            {children}
            <Footer style={styles.footer}>
                <FooterTab style={styles.footer}>
                    <CopilotStep name='Messenger' order={1} text='Messenger is awful'>
                        <CopilotView style={styles.buttonContainer}>
                            <Button
                                vertical
                                style={active === 3 ? styles.activeButton : styles.button}
                                textStyle={styles.textStyle}
                            >
                                <Icons8MessagingIcon style={styles.icon} />
                            </Button>
                        </CopilotView>
                    </CopilotStep>
                    <CopilotStep text='HomePage is amazing' name='HomePage' order={2}>
                        <CopilotView style={styles.buttonContainer}>
                            <Button
                                vertical
                                style={active === 2 ? styles.activeButton : styles.button}
                                textStyle={styles.textStyle}
                            >
                                <Icons8CaretakerIcon style={styles.icon} />
                            </Button>
                        </CopilotView>
                    </CopilotStep>
                    <CopilotStep name='Explore' order={3} text='Nothing to say about Explore'>
                        <CopilotView style={styles.buttonContainer}>
                            <Button
                                vertical
                                style={active === 1 ? styles.activeButton : styles.button}
                                textStyle={styles.textStyle}
                            >
                                <Icons8TelescopeIcon style={styles.icon} />
                            </Button>
                        </CopilotView>
                    </CopilotStep>
                    <CopilotStep name='Settings' order={4} text='Setting is famous'>
                        <CopilotView style={styles.buttonContainer}>
                            <Button
                                vertical
                                style={active === 0 ? styles.activeButton : styles.button}
                                textStyle={styles.textStyle}
                            >
                                <Icons8SettingsIcon style={styles.icon} />
                            </Button>
                        </CopilotView>
                    </CopilotStep>
                </FooterTab>
            </Footer>
        </Container>
    );
}
