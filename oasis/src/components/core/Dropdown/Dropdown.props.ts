export interface DropdownProps {
    children: React.ReactElement<DropdownItemProps> | React.ReactElement<DropdownItemProps>[],
    trigger: React.ReactNode,
}

export interface DropdownItemProps {
    children: React.ReactNode,
    style?: React.CSSProperties,
}