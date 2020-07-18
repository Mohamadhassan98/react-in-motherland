import React from "react";
import {Avatar} from "react-native-elements";
import {AvatarProps} from "./types/AvatarProps";
import icon from "../../assets/icons/icons8-google-images-48.png";
import {getMaterialColorForUser} from "../values/materialColors";
import {Asset} from "expo-asset";

export default function ({
    profileImage,
    size,
    showAccessory,
    visibleName,
    onAccessoryPress,
    local,
    navigation,
    onPress,
}: AvatarProps) {
    const uri = local && profileImage ? Asset.fromModule(profileImage).uri : profileImage;
    return (
        <Avatar
            onPress={
                onPress || navigation
                    ? () => {
                          if (onPress) {
                              onPress();
                          } else {
                              navigation?.navigate("Home", {you: false, visibleName, profileImage} as any);
                          }
                      }
                    : undefined
            }
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
            containerStyle={{backgroundColor: getMaterialColorForUser(visibleName.length)}}
        />
    );
}
