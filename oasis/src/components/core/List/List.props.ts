export interface ListItemProps {
    children: React.ReactNode,
    style?: React.CSSProperties,
}

export interface ListProps {
    children: React.ReactElement<ListItemProps> | React.ReactElement<ListItemProps>[],
    style?: React.CSSProperties,
}