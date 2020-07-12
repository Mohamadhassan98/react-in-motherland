export type AvatarProps = {
    size?: "small" | "medium" | "large" | "xlarge" | number;
    showAccessory?: boolean;
    onAccessoryPress?: () => void;
    local?: boolean;
} & SimpleUser;

export interface SimpleUser {
    profileImage?: string;
    visibleName: string;
}
