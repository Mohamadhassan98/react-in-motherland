import React from "react";
import {Grid, Header, Row, Text} from "native-base";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";
import CommonColor from "../../native-base-theme/variables/commonColor";

const styles = StyleSheet.create({
    gridRow: {
        alignItems: "center",
        backgroundColor: CommonColor.inverseTextColor,
        height: 50,
    },
    headerExpanded: {
        alignItems: "center",
        backgroundColor: CommonColor.inverseTextColor,
        height: 100,
    },
    textAlignCenter: {
        flex: 1,
        textAlign: "center",
    },
});

export default function ({
    size,
    children,
    hasTabs,
}: {
    size: "collapsed" | "expanded";
    children: React.ReactElement;
    hasTabs?: boolean;
}) {
    return (
        <Header hasTabs={hasTabs} style={size === "expanded" ? [styles.headerExpanded] : [styles.gridRow]}>
            <Grid>
                {size === "expanded" && (
                    <Row style={styles.gridRow}>
                        <Text style={styles.textAlignCenter}>{t("appName")}</Text>
                    </Row>
                )}
                <Row style={styles.gridRow}>{children}</Row>
            </Grid>
        </Header>
    );
}
