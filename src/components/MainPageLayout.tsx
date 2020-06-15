import React from "react";
import {Button, Container, Footer, FooterTab, Icon, Text} from "native-base";
import {t} from "i18n-js";

export default function ({children}: {children: React.ReactElement}) {
    return (
        <Container>
            {children}
            <Footer>
                <FooterTab>
                    <Button vertical>
                        <Icon name='settings-outline' />
                        <Text>{t("settings")}</Text>
                    </Button>
                    <Button vertical>
                        <Icon name='' />
                        <Text>{t("explore")}</Text>
                    </Button>
                    <Button vertical>
                        <Icon name='' />
                        <Text>{t("personalPage")}</Text>
                    </Button>
                    <Button vertical>
                        <Icon name='' />
                        <Text>{t("messenger")}</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
}
