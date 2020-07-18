import React from "react";
import {Button, Card, Content, DatePicker, Text, View} from "native-base";
import Icons8CalendarIcon from "../../assets/icons/CalendarIcon";
import {t} from "i18n-js";
import makeStyles from "../utils/makeStyles";

const useStyles = makeStyles((theme) => ({
    datePickerText: {
        fontFamily: theme.font.Body,
        color: "green",
        width: 0,
        height: 0,
    },
    none: {
        width: 0,
        height: 0,
    },
}));

export default function () {
    const [chosenDate, setChosenDate] = React.useState<Date>();
    const datePicker = React.useRef<DatePicker | null>(null);
    const styles = useStyles();
    return (
        <Content>
            <View style={styles.none}>
                <DatePicker
                    defaultDate={new Date()}
                    minimumDate={new Date(1990, 1, 1)}
                    maximumDate={new Date()}
                    locale='fa'
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={true}
                    animationType='fade'
                    androidMode='default'
                    // placeHolderText='Select date'
                    textStyle={styles.datePickerText}
                    placeHolderTextStyle={{
                        color: "transparent",
                        // width: 0, height: 0
                    }}
                    onDateChange={setChosenDate}
                    disabled={false}
                    ref={datePicker}
                />
            </View>
            <Card style={{borderRadius: 15, height: 60}}>
                <Button
                    onPress={() => (datePicker.current as any)?.showDatePicker()}
                    icon
                    transparent
                    style={{height: "100%", width: "100%", paddingStart: 10, paddingEnd: 10}}
                >
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <Text style={{flexGrow: 1, display: "flex", opacity: 0.3, textAlign: "left"}}>
                            {chosenDate ? chosenDate.toString().substr(4, 12) : t("selectBirthDate")}
                        </Text>
                        <Icons8CalendarIcon style={{height: 48, width: 48, display: "flex"}} />
                    </View>
                </Button>
            </Card>
        </Content>
    );
}
