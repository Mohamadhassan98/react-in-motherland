import React from "react";
import {Avatar} from "react-native-elements";
import {AvatarProps} from "./types/AvatarProps";
import icon from "../../assets/icons/icons8-google-images-48.png";
import {getMaterialColor} from "../values/materialColors";
import {Asset} from "expo-asset";

export default function ({profileImage, size, showAccessory, visibleName, onAccessoryPress, local}: AvatarProps) {
    const uri = local && profileImage ? Asset.fromModule(profileImage).uri : profileImage;
    return (
        <Avatar
            size={size}
            source={
                profileImage
                    ? {
                          uri,
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
