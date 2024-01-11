// import { SelectProps } from "../Select.props"

// import { Button } from "../../../Button"
// import { Dropdown, DropdownItem } from "../../../core"
// import { cloneElement } from "react"

// export const Select: React.FC<SelectProps>= ({ children }) => {
    
//     const content = <>
//         {
//             (Array.isArray(children) && children.length) ?
//                 children.map((child, index) => (
//                     {cloneElement(child, {key: {index}})}
//                 )) :
//                 children
//         }
//     </>

//     return (<Dropdown trigger={<Button style={{
//         width: '100%',
//     }}>
//         ----
//     </Button>}>
//         {content}
//     </Dropdown>)
// }