import React from "react";
import {Avatar} from "react-native-elements";
import {AvatarProps} from "./types/AvatarProps";
import icon from "../../assets/icons/icons8-google-images-48.png";
import {getMaterialColor} from "../values/materialColors";
import {ToastAndroid} from "react-native";
import useMediaPicker from "../utils/useMediaPicker";
export default function ({profileImage, size, showAccessory, visibleName, onAccessoryPress}: AvatarProps) {
    return (
        <Avatar
            size={size}
            source={
                profileImage
                    ? {
                          uri: profileImage,
                      }
                    : undefined
            }
            rounded
            showAccessory={showAccessory}
            onAccessoryPress={onAccessoryPress}
            accessory={{source: icon, backgroundColor: "#0000ff"}}
            title={visibleName
                .split(" ")
                .map((value) => value.charAt(0))
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            titleStyle={{color: "#ffffff"}}
            containerStyle={{backgroundColor: getMaterialColor(visibleName.length)}}
        />
    );
}
