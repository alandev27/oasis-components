import { StyleSheet } from "../../../context/OasisProvider"

export const CardStyle: StyleSheet = (theme) => ({
    backgroundColor: theme!.backgroundColor,
    border: `1px solid ${theme!.borderColor}`,
    borderRadius: "0.5rem",
    padding: "0.7rem",
})