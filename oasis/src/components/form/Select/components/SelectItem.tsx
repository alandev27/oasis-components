import { useTheme } from "../../../../context/OasisProvider";
import { DropdownItem, ListItemBase } from "../../../core";
import { SelectItemProps } from "../Select.props";

export const SelectItem: React.FC<SelectItemProps> = ({ children, selected }) => {
    return (<DropdownItem style={{
        backgroundColor: (selected) ? useTheme().backgroundSelectedColor : useTheme().backgroundColor,
    }}>{ children }</DropdownItem>)
};