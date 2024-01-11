import { useTheme } from "../../../context/OasisProvider";
import { Card } from "../Card";
import { ListItemProps, ListProps } from "./List.props";
import { ListStyle, ListItemStyle, ListItemActiveStyle } from "./List.styles";
import { useState, cloneElement } from "react";

export const List: React.FC<ListProps> = ({ children, style }) => {
    const renderChildren = () => {
        if (Array.isArray(children) && children.length) {
            return children.map((child, index) => (
                <div key={index}>{child}</div>
            ));
        }
        return children;
    };

    return (<Card style={{
        ...ListStyle(),
        ...style,
    }}>
        { renderChildren() }      
    </Card>)
}

export const ListItemBase: React.FC<ListItemProps> = ({ children, style }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const theme = useTheme();

    return (
        <div 
            style={{
                ...ListItemStyle(theme),
                ...(hovered ? ListItemActiveStyle(theme) : {}),
                ...style
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            { children }
        </div>
    );
};