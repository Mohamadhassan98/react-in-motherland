import React from "react";
import {StyleSheet} from "react-native";
import {Avatar} from "react-native-elements";
import {Container} from "native-base";
import {AvatarProps} from "./types/AvatarProps";
const style = StyleSheet.create({
    avatarStyle: {},
});
export default function ({profileImage, size}: AvatarProps) {
    return (
        <Container>
            <Avatar
                size={size}
                source={{
                    uri: profileImage,
                }}
                rounded
                showAccessory
            />
        </Container>
    );
}
