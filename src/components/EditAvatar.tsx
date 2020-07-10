import React from "react";
import Avatar from "./Avatar";
import {AvatarProps} from "./types/AvatarProps";
export default function ({profileImage, size, visibleName}: AvatarProps) {
    return <Avatar profileImage={profileImage} size={size} visibleName={visibleName} showAccessory />;
}
