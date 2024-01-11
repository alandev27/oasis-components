import { useTheme } from '../../../context/OasisProvider';
import { CardProps } from './Card.props';
import { CardStyle } from './Card.styles';

export const Card: React.FC<CardProps> = ({ children, style, ...other }) => {
    console.log({
        ...CardStyle(useTheme()),
        ...style
    })
    console.log(style)

    return (
        <div
        style={{
            ...CardStyle(useTheme()),
            ...style
        }}
        
        {...other}
        >
            {children}
        </div>
    );
}