export interface AvatarProps {
    profileImage?: string;
    size?: "small" | "medium" | "large" | "xlarge" | number;
    showAccessory?: boolean;
    visibleName: string;
}
