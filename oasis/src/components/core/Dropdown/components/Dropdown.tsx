import { useState, cloneElement } from 'react';
import { DropdownProps } from '../Dropdown.props';
import { DropdownStyles, DropdownItemStyles } from '../Dropdown.styles';
import { List } from '../../List';

export const Dropdown: React.FC<DropdownProps> = ({ children, trigger }) => {
    const [opened, setOpened] = useState<boolean>(false);

    const toggleDropdown = () => setOpened(!opened);

    const renderChildren = () => {
        if (Array.isArray(children) && children.length) {
            return children.map((child, index) => (
                <div key={index}>{child}</div>
            ));
        }
        return children;
    };

    return (
        <div style={{
            ...DropdownStyles,
        }}>
            {cloneElement(trigger as React.ReactElement<any>, { onClick: toggleDropdown })}
            {opened && (
                <List style={{
                    ...DropdownItemStyles(),
                }}>
                    {renderChildren()}
                </List>
            )}
        </div>
    );
};
