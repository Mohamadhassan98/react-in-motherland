import * as Updates from "expo-updates";

export default async () => {
    await Updates.reloadAsync();
};
