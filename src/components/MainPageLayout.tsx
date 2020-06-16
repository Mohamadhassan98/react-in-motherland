import React from "react";
import {Button, Container, Footer, FooterTab, Icon, Text} from "native-base";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";
import commonColor from "../../native-base-theme/variables/commonColor";

const Styles = StyleSheet.create({
    activeButton: {
        backgroundColor: commonColor.brandPrimary,
        height: 75,
    },
    button: {
        height: 75,
    },
    container: {
        backgroundColor: commonColor.inverseTextColor,
    },
    footer: {
        backgroundColor: commonColor.footerDefaultBg,
        height: 75,
    },
    icon: {
        color: commonColor.textColor,
    },
    textStyle: {
        color: commonColor.textColor,
        paddingLeft: 0,
        paddingRight: 0,
    },
});

export default function ({children, active}: {children: React.ReactElement[]; active: number}) {
    return (
        <Container style={Styles.container}>
            {children}
            <Footer style={Styles.footer}>
                <FooterTab style={Styles.footer}>
                    <Button
                        // active={active === 0}
                        vertical
                        style={active === 0 ? Styles.activeButton : Styles.button}
                        textStyle={Styles.textStyle}
                    >
                        <Icon name='md-settings' type='Ionicons' style={Styles.icon} />
                        <Text style={Styles.textStyle}>{t("settings")}</Text>
                    </Button>
                    <Button
                        // active={active === 1}
                        vertical
                        style={active === 1 ? Styles.activeButton : Styles.button}
                        textStyle={Styles.textStyle}
                    >
                        <Icon name='explore' type='MaterialIcons' style={Styles.icon} />
                        <Text style={Styles.textStyle}>{t("explore")}</Text>
                    </Button>
                    <Button
                        // active={active === 2}
                        vertical
                        style={active === 2 ? Styles.activeButton : Styles.button}
                        textStyle={Styles.textStyle}
                    >
                        <Icon name='person' style={Styles.icon} />
                        <Text style={Styles.textStyle}>{t("personalPage")}</Text>
                    </Button>
                    <Button
                        // active={active === 3}
                        vertical
                        style={active === 3 ? Styles.activeButton : Styles.button}
                        textStyle={Styles.textStyle}
                    >
                        <Icon name='chat' type='MaterialIcons' style={Styles.icon} />
                        <Text style={Styles.textStyle}>{t("messenger")}</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
}
