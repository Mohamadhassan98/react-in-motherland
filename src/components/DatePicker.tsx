import React, {Component} from "react";
import {Container, Header, Content, DatePicker, Text, Button, View, Card, Left, Right, Body} from "native-base";
import Icons8CalendarIcon from "../../assets/icons/CalendarIcon";
export default function () {
    const [chosenDate, setChosenDate] = React.useState<Date>(new Date());
    const datePicker = React.useRef<DatePicker | null>(null);
    return (
        <Content>
            <View style={{width: 0, height: 0}}>
                <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale='fa'
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={true}
                    animationType='fade'
                    androidMode='default'
                    // placeHolderText='Select date'
                    textStyle={{color: "green", width: 0, height: 0}}
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
                        <Text style={{flexGrow: 1, display: "flex"}}>{chosenDate.toString().substr(4, 12)}</Text>
                        <Icons8CalendarIcon style={{height: 48, width: 48, display: "flex"}} />
                    </View>
                </Button>
            </Card>
        </Content>
    );
}
