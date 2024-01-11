import { useTheme } from "../../../../context/OasisProvider"

export const Navbar = () => {
    return (<div style={{
        backgroundColor: "white",
        padding: "1.2rem 1.5rem",
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        border: `1px solid ${useTheme().borderColor}`,
        gap: "1.2rem",
    }}>
        <span style={{
            justifyContent: 'end'
        }}>Link 1</span>
        <span>Link 2</span>
        <span>Link 3</span>
        <span>Link 4</span>
    </div>)
}