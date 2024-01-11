export interface SelectProps {
    children: React.ReactElement<SelectItemProps> | React.ReactElement<SelectItemProps>[],
    style?: React.CSSProperties,
}

export interface SelectItemProps {
    children: React.ReactNode,
    selected?: boolean,  
}