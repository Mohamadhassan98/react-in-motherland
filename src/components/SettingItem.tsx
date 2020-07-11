import React from "react";
import {Left, ListItem, Right, Text} from "native-base";
import {t} from "i18n-js";
import {SettingItemProps} from "./types/SettingItemProps";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    item: {
        height: 64,
    },
});

export default function ({scope, rightAdornment, onClick, selected}: SettingItemProps) {
    return (
        <ListItem button onPress={onClick} style={styles.item} selected={selected}>
            <Left>
                <Text>{t(scope)}</Text>
            </Left>
            <Right>{rightAdornment}</Right>
        </ListItem>
    );
}
