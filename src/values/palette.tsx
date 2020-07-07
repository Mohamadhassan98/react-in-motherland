import React, {useContext} from "react";
import {AsyncStorage} from "react-native";
import CommonColor from "../../native-base-theme/variables/commonColor";

export interface PaletteContextShape {
    primary: string;
    secondary: string;
    setPrimary: (value: string) => void;
    setSecondary: (value: string) => void;
}

const PaletteContext = React.createContext<PaletteContextShape>({
    primary: "#F12345",
    secondary: "#F12345",
    setPrimary: () => {},
    setSecondary: () => {},
});

export default function usePalette() {
    return useContext(PaletteContext);
}

export function PaletteProvider({children}: {children: React.ReactElement}) {
    React.useEffect(() => {
        AsyncStorage.getItem("primary").then((value) => {
            if (value) {
                setPrimary(value);
            }
        });
        AsyncStorage.getItem("secondary").then((value) => {
            if (value) {
                setSecondary(value);
            }
        });
    }, []);
    const [primary, setPrimary] = React.useState<string>(CommonColor.brandPrimary);
    const [secondary, setSecondary] = React.useState<string>(CommonColor.brandSecondary);
    const setPrime = (value: string) => {
        AsyncStorage.setItem("primary", value).then(() => setPrimary(value));
    };
    const setSecond = (value: string) => {
        AsyncStorage.setItem("secondary", value).then(() => setSecondary(value));
    };
    return (
        <PaletteContext.Provider value={{primary, setPrimary: setPrime, secondary, setSecondary: setSecond}}>
            {children}
        </PaletteContext.Provider>
    );
}
