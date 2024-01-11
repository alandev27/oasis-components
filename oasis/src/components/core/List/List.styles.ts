import { StyleSheet } from "../../../context/OasisProvider";

export const ListStyle: StyleSheet = (theme) => ({
    padding: "0.2rem",
});

export const ListItemStyle: StyleSheet = (theme) => ({
    backgroundColor: theme!.backgroundColor,
    borderRadius: "0.5rem",
    padding: "0.7rem",
});

export const ListItemActiveStyle: StyleSheet = (theme) => ({
    backgroundColor: theme!.backgroundSelectedColor,
});