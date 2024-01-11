export enum Variant {
    LIGHT = 'light',
    ACCENT = 'accent',
}

export interface ButtonProps {
    children: React.ReactNode,
    style?: React.CSSProperties,
    type?: Variant;
    [key: string]: any,
}