import React from "react";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import {PermissionStatus} from "expo-image-picker";

export default function (type: "camera" | "gallery", fileType?: "Images" | "All", askPermissionOnMount?: boolean) {
    const [result, setResult] = React.useState<string>();
    const select = async () => {
        const access = await getAccess();
        if (access) {
            if (type === "gallery") {
                await getMedia();
            } else {
                await takeMedia();
            }
        }
    };

    const getAccess = async () => {
        if (type === "gallery") {
            if (Constants.platform?.ios) {
                const {status} = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== PermissionStatus.GRANTED) {
                    alert("Sorry, we need camera roll permissions to make this work!");
                    return false;
                }
            }
            return true;
        } else {
            const {status} = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== PermissionStatus.GRANTED) {
                alert("Sorry, we need camera permissions to make this work!");
                return false;
            }
            return true;
        }
    };

    React.useEffect(() => {
        if (askPermissionOnMount) {
            getAccess();
        }
    }, [askPermissionOnMount, getAccess]);

    const getMedia = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions[fileType || "Images"],
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setResult(result.uri);
            }
        } catch (E) {
            console.log(E);
        }
    };

    const takeMedia = async () => {
        try {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setResult(result.uri);
            }
        } catch (E) {
            console.log(E);
        }
    };
    return {result, select};
}
