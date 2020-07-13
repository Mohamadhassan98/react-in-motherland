import React from "react";
import {Button, Container, Footer, Left, List, Right, Row, Text, Thumbnail, View} from "native-base";
import SimpleHeader from "../components/SimpleHeader";
import MainHeader from "../components/MainHeader";
import {ListView, ScrollView, Share, ToastAndroid, View as RNView} from "react-native";
import Menu, {MenuItem} from "react-native-material-menu";
import {t} from "i18n-js";
import Icons8MenuIcon from "../../assets/icons/MenuIcon";
import Avatar from "../components/Avatar";
import {PostPageProps} from "./types/PostPageProps";
import Icons8LoveIcon from "../../assets/icons/LoveIcon";
import {CommentProps} from "../components/types/CommentProps";
import CommentCard from "../components/CommentCard";
import makeStyles from "../utils/makeStyles";
import LoveOutline from "../../assets/icons/LoveOutline";
import Icons8ShareIcon from "../../assets/icons/ShareIcon";
import AddComment from "../components/AddComment";

const useStyles = makeStyles((theme) => ({
    p16: {
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
    px16: {
        paddingStart: 16,
        paddingEnd: 16,
    },
    itemsCenter: {
        alignItems: "center",
    },
    pb0: {
        paddingBottom: 0,
    },
    ms8: {
        marginStart: 8,
    },
    userName: {
        fontWeight: "bold",
        fontSize: 12,
        fontFamily: theme.font.body.Bold,
    },
    bodyMedia: {
        width: "100%",
        height: 340,
    },
    bodyText: {
        fontFamily: theme.font.body.Medium,
        fontWeight: "500",
        fontSize: 12,
    },
    publishDate: {
        fontSize: 10,
        fontFamily: theme.font.body.Light,
        fontWeight: "300",
    },
    publishDateWrapper: {
        marginTop: 16,
        paddingStart: 16,
        marginBottom: 19,
    },
    commentsCount: {
        marginTop: 16,
        marginStart: 16,
        fontSize: 10,
        fontWeight: "500",
        fontFamily: theme.font.body.Medium,
    },
    moreComments: {
        textDecorationLine: "underline",
        color: theme.palette.Secondary,
        fontSize: 10,
        fontWeight: "500",
        fontFamily: theme.font.body.Medium,
        marginTop: 4,
        marginEnd: 16,
        marginBottom: 16,
    },
    buttons: {
        flex: 1,
        justifyContent: "center",
        borderColor: "#F1F1F1",
    },
    footer: {
        backgroundColor: "#F1F1F1",
    },
    textLeft: {
        textAlign: "left",
    },
}));

export default function (props: PostPageProps) {
    const menu = React.useRef<Menu | null>(null);
    const trump =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/368px-Donald_Trump_official_portrait.jpg";
    const initComments: CommentProps[] = new Array(5).fill({
        body: "Please delay the project deadline.",
        datePublished: "3 mins ago",
        profileImage: trump,
        visibleName: "Amir reza",
    });
    const post = {
        datePublished: "10 دقیقه پیش",
        postMediaUri: trump,
        postCaption: "data scientist jobs",
        likes: 123,
        shares: 321,
    };
    const user = {
        visibleName: "Donald trump",
        profileImage: undefined,
    };
    const [allCommentsShown, setAllCommentsShown] = React.useState(false);
    const styles = useStyles();
    const {likes} = post;
    const [liked, setLiked] = React.useState(false);
    const [shares, setShares] = React.useState(post.shares);
    const [comments, setComments] = React.useState(initComments);
    // eslint-disable-next-line no-extra-parens
    const commentsRef = React.useRef<(ListView & ScrollView & RNView) | null>(null);
    React.useEffect(() => {
        if (comments !== initComments) {
            setAllCommentsShown(true);
            commentsRef.current?.scrollToEnd({animated: true});
        }
    }, [comments, initComments]);
    return (
        <Container>
            <MainHeader size='collapsed'>
                <SimpleHeader
                    title='post'
                    rightAdornment={
                        <Menu
                            button={
                                <Button onPress={() => menu.current?.show()} transparent>
                                    <Icons8MenuIcon />
                                </Button>
                            }
                            ref={menu}
                        >
                            <MenuItem
                                onPress={() => {
                                    ToastAndroid.show(t("reportedSuccessfully"), ToastAndroid.LONG);
                                    menu.current?.hide();
                                }}
                            >
                                <Text>{t("report")}</Text>
                            </MenuItem>
                        </Menu>
                    }
                />
            </MainHeader>
            <ScrollView ref={commentsRef}>
                <Row style={[styles.itemsCenter, styles.p16, styles.pb0]}>
                    <Avatar size={32} visibleName={user.visibleName} />
                    <Text style={[styles.ms8, styles.userName]}>{user.visibleName}</Text>
                </Row>
                <View style={styles.p16}>
                    <Thumbnail
                        square
                        style={styles.bodyMedia}
                        source={{
                            uri: post.postMediaUri,
                        }}
                    />
                </View>
                <View style={styles.px16}>
                    <Text style={[styles.bodyText, styles.textLeft]}>{post.postCaption}</Text>
                </View>
                <View style={styles.publishDateWrapper}>
                    <Text style={styles.publishDate}>{post.datePublished}</Text>
                </View>
                <Row>
                    <Button
                        transparent
                        bordered
                        style={styles.buttons}
                        onPress={() => setLiked((prevState) => !prevState)}
                    >
                        {liked ? <Icons8LoveIcon /> : <LoveOutline />}
                        <Text>{liked ? likes + 1 : likes}</Text>
                    </Button>
                    <Button
                        transparent
                        bordered
                        style={styles.buttons}
                        onPress={async () => {
                            try {
                                const result = await Share.share({
                                    message: post.postCaption,
                                    title: t("sharePost"),
                                });
                                if (result.action === Share.sharedAction) {
                                    setShares((prevState) => prevState + 1);
                                }
                            } catch (error) {
                                alert(error.message);
                            }
                        }}
                    >
                        <Icons8ShareIcon />
                        <Text>{shares}</Text>
                    </Button>
                </Row>
                <Row>
                    <Left>
                        <Text style={styles.commentsCount}>{`${comments.length} ${t("comments")}`}</Text>
                    </Left>
                </Row>
                <List>
                    {comments
                        .filter((value, index) => allCommentsShown || index < 2)
                        .map((value, index) => (
                            <CommentCard {...value} key={index} />
                        ))}
                </List>
                {!allCommentsShown && comments.length > 2 && (
                    <Row>
                        <Right>
                            <Button transparent onPress={() => setAllCommentsShown(true)}>
                                <Text style={styles.moreComments}>{t("viewAll")}</Text>
                            </Button>
                        </Right>
                    </Row>
                )}
            </ScrollView>
            <Footer style={styles.footer}>
                <AddComment
                    onSubmit={(body) => {
                        setComments((prevState) => [
                            ...prevState,
                            {
                                visibleName: user.visibleName,
                                profileImage: user.profileImage,
                                body,
                                datePublished: t("_justNow"),
                            },
                        ]);
                    }}
                />
            </Footer>
        </Container>
    );
}
