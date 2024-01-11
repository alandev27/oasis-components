import React from "react";
import { useState } from "react";
import { ButtonProps, Variant } from "./Button.props";
import { BaseButtonStyle, AccentButtonStyle, LightButtonStyle, LightHoverButtonStyle, AccentHoverButtonStyle, ActiveButtonStyle } from './Button.styles';
import { useTheme } from "../../../context/OasisProvider";

export { Variant };

export const Button: React.FC<ButtonProps> = ({ children, type, style, ...props }) => {
    const [hovered, setHovered] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const handleFocus = () => setFocus(true);
    const handleBlur = () => setFocus(false);

    const theme = useTheme();

    return (
        <button 
            style={{
                ...BaseButtonStyle(theme),
                ...((() => {
                    switch (type) {
                        case Variant.ACCENT:
                            return AccentButtonStyle(theme);
                        case Variant.LIGHT:
                            return LightButtonStyle(theme);
                        default:
                            return LightButtonStyle(theme);
                    }
                })()),
                ...((hovered) ? 
                    (() => {
                        switch (type) {
                            case Variant.ACCENT:
                                return AccentHoverButtonStyle(theme);
                            case Variant.LIGHT:
                                return LightHoverButtonStyle(theme);
                            default:
                                return LightHoverButtonStyle(theme);
                        }
                    })()
                    : {}),

                ...((focus) ? ActiveButtonStyle(theme) : {}),
                ...style
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus} 
            onBlur={handleBlur}
            {...props}
            >
            {children}
        </button>
    );
}
    