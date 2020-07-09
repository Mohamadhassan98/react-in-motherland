import React from "react";
import {Button, Container, Footer, FooterTab} from "native-base";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";
import commonColor from "../../native-base-theme/variables/commonColor";
import {TourGuideZone, useTourGuideController} from "rn-tourguide";
import Icons8CaretakerIcon from "../../assets/icons/CaretakerIcon";
import Icons8MessagingIcon from "../../assets/icons/MessagingIcon";
import Icons8TelescopeIcon from "../../assets/icons/TelescopeIcon";
import Icons8SettingsIcon from "../../assets/icons/SettingsIcon";

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
        height: 40,
        width: 40,
    },
    textStyle: {
        color: commonColor.textColor,
        paddingLeft: 0,
        paddingRight: 0,
    },
});

export default function ({children, active}: {children: React.ReactElement[]; active: number}) {
    const {
        canStart, // a boolean indicate if you can start tour guide
        start, // a function to start the tourguide
        stop, // a function  to stopping it
        eventEmitter, // an object for listening some events
    } = useTourGuideController();
    React.useEffect(() => {
        if (canStart) {
            start?.();
        }
    }, [canStart]);
    return (
        <Container style={Styles.container}>
            {children}
            <Footer style={Styles.footer}>
                <FooterTab style={Styles.footer}>
                    <Button
                        vertical
                        style={active === 3 ? Styles.activeButton : Styles.button}
                        textStyle={Styles.textStyle}
                    >
                        <TourGuideZone zone={1} text={t("messenger")} keepTooltipPosition maskOffset={0}>
                            <Icons8MessagingIcon style={Styles.icon} />
                        </TourGuideZone>
                    </Button>
                    <Button
                        vertical
                        style={active === 2 ? Styles.activeButton : Styles.button}
                        textStyle={Styles.textStyle}
                    >
                        <TourGuideZone zone={2} text={t("personalPage")} keepTooltipPosition maskOffset={0}>
                            <Icons8CaretakerIcon style={Styles.icon} />
                        </TourGuideZone>
                    </Button>
                    {/*</TourGuideZone>*/}
                    <Button
                        vertical
                        style={active === 1 ? Styles.activeButton : Styles.button}
                        textStyle={Styles.textStyle}
                    >
                        <Icons8TelescopeIcon style={Styles.icon} />
                    </Button>
                    <Button
                        vertical
                        style={active === 0 ? Styles.activeButton : Styles.button}
                        textStyle={Styles.textStyle}
                    >
                        <Icons8SettingsIcon style={Styles.icon} />
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
}
