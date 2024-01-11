import { StyleSheet } from "../../../context/OasisProvider"

export const BaseAlertStyle: StyleSheet = () => ({
    width: "30rem",
});

export const IconAlertStyle: StyleSheet = () => ({
    ...BaseAlertStyle(),
    display: 'flex',
    alignItems: 'start',
    
});