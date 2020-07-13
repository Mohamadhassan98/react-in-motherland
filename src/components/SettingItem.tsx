import React from "react";
import {Left, ListItem, Right, Text} from "native-base";
import {t} from "i18n-js";
import {SettingItemProps} from "./types/SettingItemProps";
import makeStyles from "../utils/makeStyles";

const useStyles = makeStyles((theme) => ({
    item: {
        height: 64,
    },
    selected: {
        backgroundColor: theme.palette.Secondary,
    },
    selectedText: {
        color: theme.palette.textSecondary,
    },
}));

export default function ({scope, rightAdornment, onClick, selected}: SettingItemProps) {
    const styles = useStyles();
    return (
        <ListItem button onPress={onClick} style={!selected ? [styles.item] : [styles.item, styles.selected]} noIndent>
            <Left>
                <Text style={selected ? styles.selectedText : []}>{t(scope)}</Text>
            </Left>
            <Right>{rightAdornment}</Right>
        </ListItem>
    );
}
