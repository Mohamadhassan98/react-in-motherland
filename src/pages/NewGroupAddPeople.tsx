import React, {useState} from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import {StyleSheet} from "react-native";
import NewMessageHeader from "../components/NewMessageHeader";
import {Container, Content, Button, Thumbnail, Text, View, Fab, Icon} from "native-base";
import {
    contactListA,
    contactListB,
    contactListF,
    contactListH,
    contactListFaAlef,
    contactListFaBe,
} from "../values/strings";
import {t} from "i18n-js";
import NewGroupAddPeopleHeader from "../components/NewGroupAddPeopleHeader";

const styles = StyleSheet.create({
    Alphabet: {
        alignContent: "center",
        alignItems: "center",
        //backgroundColor: "red",
        display: "flex",
        fontSize: 30,
        justifyContent: "center",
        marginBottom: "1.8%",
        textAlign: "center",
        width: "22%",
    },
    FAB: {
        backgroundColor: "#81e38f",
    },
    Info: {
        borderBottomWidth: 1,
        borderColor: "#eeeeee",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "2%",
        width: "55%",
    },
    InfoR: {
        borderBottomWidth: 1,
        borderColor: "#eeeeee",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "2%",
        width: "75%",
    },
    avatar: {
        width: "15%",
    },
    listItem: {
        alignItems: "flex-end",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        //marginBottom: "3%",
        width: "100%",
        marginTop: "2%",
    },
    result: {
        display: "flex",
        width: "100%",
        height: 450,
        //backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        textAlign: "left",
    },
    textLastSeen: {
        marginBottom: "5%",
        textAlign: "left",
    },
});

export default function NewMessage() {
    const [Active, setActive] = useState(false);
    const [SearchText, setSearchText] = useState("");
    return (
        <MainPageLayout active={3}>
            <MainHeader size='collapsed'>
                <NewGroupAddPeopleHeader setSearchText={setSearchText} />
            </MainHeader>
            {/* Rest of code here */}
            <Container>
                <Content></Content>
            </Container>
        </MainPageLayout>
    );
}
