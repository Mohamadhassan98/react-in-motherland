import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import PersonalPageHeader from "../components/PersonalPageHeader";
import PersonalUserInfo from "../components/PersonalUserInfo";
import {Content, Fab, Icon, View} from "native-base";
import PersonalPageBio from "../components/PersonalPageBio";
import PersonalPageRecommends from "../components/PersonalPageRecommends";
import PersonalPagePosts from "../components/PersonalPagePosts";
import {StyleSheet} from "react-native";
import CommonColors from "../../native-base-theme/variables/commonColor";

const styles = StyleSheet.create({
    fab: {
        flex: 1,
        marginBottom: 50,
    },
    fabButton: {
        backgroundColor: CommonColors.brandSecondary,
        marginBottom: 50,
    },
    primary: {
        height: "100%",
    },
});

export default function () {
    return (
        <MainPageLayout active={2}>
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
                        <Icon name='md-camera' />
                    </Fab>
                </View>
            </Content>
        </MainPageLayout>
    );
}
