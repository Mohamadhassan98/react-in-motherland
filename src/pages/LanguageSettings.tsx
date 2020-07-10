import React from "react";
import {Container, Content, List} from "native-base";
import MainHeader from "../components/MainHeader";
import SimpleHeader from "../components/SimpleHeader";
import MenuVerticalIcon from "../../assets/icons/MenuVerticalIcon";
import SettingItem from "../components/SettingItem";
import useTheme from "../values/theme";

export default function () {
    const theme = useTheme();
    return (
        <Container>
            <MainHeader size='collapsed'>
                <SimpleHeader title='colorSettings' rightAdornment={<MenuVerticalIcon />} />
            </MainHeader>
            <Content>
                <List>
                    <SettingItem scope='systemDefault' onClick={() => theme.localize.setLanguage(null)} />
                    <SettingItem scope='persian' onClick={() => theme.localize.setLanguage("fa")} />
                    <SettingItem scope='english' onClick={() => theme.localize.setLanguage("en")} />
                </List>
            </Content>
        </Container>
    );
}
