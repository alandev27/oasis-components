import { ListItemBase } from '../../List';
import { DropdownItemProps } from '../Dropdown.props';

export const DropdownItem: React.FC<DropdownItemProps> = ({ children }) => {
    return (<ListItemBase>{children}</ListItemBase>)
}