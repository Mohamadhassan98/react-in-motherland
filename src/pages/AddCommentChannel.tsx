import React from "react";
import MainHeader from "../components/MainHeader";
import {Container, Content, Footer} from "native-base";
import SendMessageBox from "../components/SendMessageBox";
import {t} from "i18n-js";
import SimpleHeader from "../components/SimpleHeader";
import {StackNavigator} from "../values/Routing";
import {CommentProps} from "../components/types/CommentProps";
import CommentCard from "../components/CommentCard";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    bgTransparent: {
        backgroundColor: "transparent",
    },
});

export default function ({navigation, route}: StackNavigator<"AddCommentChannel">) {
    const initialValue = new Array<CommentProps>(5).fill({
        visibleName: "Amir reza",
        profileImage:
            "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
        datePublished: t("_tenMinutesAgo"),
        body: "I have a hard time these days.",
    });
    const [comments, setComments] = React.useState<CommentProps[]>(initialValue);
    return (
        <Container>
            <MainHeader size='collapsed'>
                <SimpleHeader title='Comments' navigation={navigation} />
            </MainHeader>
            <Content>
                {comments.map((value, index) => (
                    <CommentCard {...value} key={index} />
                ))}
            </Content>
            <Footer style={styles.bgTransparent}>
                <SendMessageBox
                    onSubmit={(body) => {
                        setComments((prevState) => [
                            ...prevState,
                            {
                                body,
                                datePublished: t("_justNow"),
                                visibleName: "Donald trump",
                                profileImage: undefined,
                            },
                        ]);
                    }}
                />
            </Footer>
        </Container>
    );
}
