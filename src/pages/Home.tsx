import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import PersonalPageHeader from "../components/PersonalPageHeader";
import PersonalUserInfo from "../components/PersonalUserInfo";
import {Content, Fab, View} from "native-base";
import PersonalPageBio from "../components/PersonalPageBio";
import PersonalPageRecommends from "../components/PersonalPageRecommends";
import PersonalPagePosts from "../components/PersonalPagePosts";
import makeStyles from "../utils/makeStyles";
import {StackNavigator} from "../values/Routing";
import Icons8GoogleImagesIcon from "../../assets/icons/GoogleImagesIcon";

const useStyles = makeStyles((theme) => ({
    fab: {
        flex: 1,
        marginBottom: 50,
    },
    fabButton: {
        backgroundColor: theme.palette.Secondary,
        marginBottom: 50,
    },
    primary: {
        height: "100%",
    },
}));

export default function ({navigation}: StackNavigator<"Home">) {
    const styles = useStyles();
    return (
        <MainPageLayout active={2} navigation={navigation}>
            <MainHeader size='collapsed'>
                <PersonalPageHeader />
            </MainHeader>
            <Content scrollEnabled={false} style={styles.primary}>
                <PersonalUserInfo />
                <PersonalPageBio bio="I'm the dumbest U.S president ever." />
                <PersonalPageRecommends
                    images={new Array(5).fill(
                        "https://upload.wikimedia.org/wikipedia/commons/1/16/Mike_Pompeo_official_photo.jpg"
                    )}
                />
                <PersonalPagePosts />
                <View style={styles.fab}>
                    <Fab position='bottomRight' style={styles.fabButton}>
                        <Icons8GoogleImagesIcon />
                    </Fab>
                </View>
            </Content>
        </MainPageLayout>
    );
}
