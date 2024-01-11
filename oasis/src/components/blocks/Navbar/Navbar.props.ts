import { Align } from "../../utils";

export interface NavbarProps {
    children: React.ReactElement<NavbarItemProps> | React.ReactElement<NavbarItemProps>
    sticky: boolean;
}

export interface NavbarItemProps {
    align: Align,
}