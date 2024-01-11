import { cloneElement } from "react"
import { IconTextProps } from "./IconText.props"

export const IconText: React.FC<IconTextProps> = ({ children, icon, align }) => {
    return (<div style={{
        display: 'flex',
        gap: '0.3rem',
        alignItems: (align) ? align : 'start',
        fontSize: '16rem'
    }}>
        <span>{ cloneElement(icon as React.ReactElement<any>, { style: { height: '1rem' }}) }</span>
        <span>{ children }</span>
    </div>)
}