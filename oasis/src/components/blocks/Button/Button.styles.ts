import { StyleSheet } from "../../../context/OasisProvider";

export const BaseButtonStyle: StyleSheet = (theme) => ({
    border: `1px solid ${theme!.borderColor}`,
    padding: "0.6rem 0.9rem",
    borderRadius: "0.4rem",
});

export const LightButtonStyle: StyleSheet = (theme) => ({
    backgroundColor: theme!.backgroundColor,
    color: theme!.textColor,
});

export const AccentButtonStyle: StyleSheet = (theme) => ({
    backgroundColor: theme!.accentColor,
    color: theme!.textAccentColor,
});

export const LightHoverButtonStyle: StyleSheet = (theme) => ({
    backgroundColor: theme!.backgroundSelectedColor,
});

export const AccentHoverButtonStyle: StyleSheet = (theme) => ({
    backgroundColor: theme!.accentSelectedColor,
});

export const ActiveButtonStyle: StyleSheet = (theme) => ({
    outline: `solid ${theme!.accentColor}`,
});