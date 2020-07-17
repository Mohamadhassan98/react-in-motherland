import React from "react";
import {Button, Container, Content, List, Text, View} from "native-base";
import MainHeader from "../components/MainHeader";
import SettingItem from "../components/SettingItem";
import MenuVerticalIcon from "../../assets/icons/MenuVerticalIcon";
import makeStyles from "../utils/makeStyles";
import SimpleHeader from "../components/SimpleHeader";
import {StackNavigator} from "../values/Routing";
import Menu, {MenuItem} from "react-native-material-menu";
import {t} from "i18n-js";
import useTheme from "../values/theme";
import commonColor from "../../native-base-theme/variables/commonColor";

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

export default function ({navigation}: StackNavigator<"ChangeColorSettings">) {
    const styles = useStyles();
    const menu = React.useRef<Menu | null>(null);
    const theme = useTheme();
    return (
        <Container>
            <MainHeader size='collapsed'>
                <SimpleHeader
                    title='colorSettings'
                    navigation={navigation}
                    rightAdornment={
                        <Menu
                            button={
                                <Button onPress={() => menu.current?.show()} transparent>
                                    <MenuVerticalIcon />
                                </Button>
                            }
                            ref={menu}
                        >
                            <MenuItem
                                onPress={() => {
                                    theme.palette.setPrimary(commonColor.brandPrimary);
                                    theme.palette.setSecondary(commonColor.brandSecondary);
                                    menu.current?.hide();
                                }}
                            >
                                <Text>{t("resetToDefault")}</Text>
                            </MenuItem>
                        </Menu>
                    }
                />
            </MainHeader>
            <Content>
                <List>
                    <SettingItem
                        scope='Primary'
                        rightAdornment={<View style={styles.primary} />}
                        onClick={() => navigation.navigate("ChangeColorSimple", {color: "Primary"})}
                    />
                    <SettingItem
                        scope='Secondary'
                        rightAdornment={<View style={styles.secondary} />}
                        onClick={() => navigation.navigate("ChangeColorSimple", {color: "Secondary"})}
                    />
                </List>
            </Content>
        </Container>
    );
}
