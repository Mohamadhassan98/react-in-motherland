declare module "react-native-intl-phone-input" {
    import {TextStyle, ViewStyle, ImageStyle} from "react-native";
    export interface ChangeTextInput {
        dialCode: string;
        unmaskedPhoneNumber: string;
        phoneNumber: string;
        isVerified: boolean;
    }

    export interface CustomModalInput {
        modalVisible: boolean;
        countries: string[];
        onCountryChange: (countryCode: string) => void;
    }

    export interface PhoneInputProps {
        lang?: string;
        placeholder?: string;
        defaultCountry?: string;
        onChangeText?: (input: ChangeTextInput) => void;
        customModal?: (
            modalVisible: boolean,
            countries: string[],
            onCountryChange: (countryCode: string) => void
        ) => React.ReactElement;

        phoneInputStyle?: TextStyle;
        containerStyle?: ViewStyle;
        dialCodeTextStyle?: TextStyle;
        flagStyle?: ImageStyle;
        filterText?: TextStyle;
        closeText?: TextStyle;
    }
    export default class IntlPhoneInput extends React.Component<PhoneInputProps, any> {}
}
