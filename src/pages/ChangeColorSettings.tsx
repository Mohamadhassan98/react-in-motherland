import React from "react";
import {Container, Content, List, View} from "native-base";
import MainHeader from "../components/MainHeader";
import SettingItem from "../components/SettingItem";
import MenuVerticalIcon from "../../assets/icons/MenuVerticalIcon";
import makeStyles from "../utils/makeStyles";
import SimpleHeader from "../components/SimpleHeader";

const useStyles = makeStyles((theme) => ({
    primary: {
        backgroundColor: theme.palette.Primary,
        borderRadius: 20,
        height: 20,
        width: 20,
    },
    secondary: {
        backgroundColor: theme.palette.Secondary,
        borderRadius: 20,
        height: 20,
        width: 20,
    },
}));

export default function () {
    const styles = useStyles();
    return (
        <Container>
            <MainHeader size='collapsed'>
                <SimpleHeader title='colorSettings' rightAdornment={<MenuVerticalIcon />} />
            </MainHeader>
            <Content>
                <List>
                    <SettingItem scope='primary' rightAdornment={<View style={styles.primary} />} />
                    <SettingItem scope='secondary' rightAdornment={<View style={styles.secondary} />} />
                </List>
            </Content>
        </Container>
    );
}
