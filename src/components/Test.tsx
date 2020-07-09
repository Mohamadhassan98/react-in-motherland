import React, {Component} from "react";
import {Container, Header, Content, DatePicker, Text, Button, View} from "native-base";
import Icons8CalendarIcon from "../../assets/icons/CalendarIcon";
export default function ({children}: {children: React.ReactElement}) {
    const [chosenDate, setChosenDate] = React.useState<Date>(new Date());
    const datePicker = React.useRef<DatePicker | null>(null);
    return (
        <Container>
            <Header />
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

                <Button onPress={() => datePicker.current?.showDatePicker()} icon>
                    <Icons8CalendarIcon />
                </Button>
                {/*<Text>Date: {chosenDate.toString().substr(4, 12)}</Text>*/}
            </Content>
        </Container>
    );
}
