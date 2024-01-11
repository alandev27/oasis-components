import { Align } from "../utils/Align";

export interface AlertProps {
    title?: string,
    description: string,
    icon?: React.ReactNode,
    iconAlign?: Align,
    style?: React.CSSProperties,
}

export interface AlertIconProps extends AlertProps {
    icon: React.ReactNode,
    iconAlign?: Align,
}