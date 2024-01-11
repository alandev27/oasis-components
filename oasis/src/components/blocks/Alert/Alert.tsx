import { cloneElement } from 'react';
import { Card } from '../../core/Card';
import { AlertIconProps, AlertProps } from './Alert.props';
import { BaseAlertStyle, IconAlertStyle } from './Alert.styles';
import { IconText } from '../../utils';

const IconAlert: React.FC<AlertIconProps> = ({ title, description, icon, style, iconAlign, ...other }) => {
    return (<Card
        style={{
            ...IconAlertStyle(),
            ...style
        }}
        {...other}>
        <IconText icon={icon} align={iconAlign}>
            {(title) ? <h3>{title}</h3> : (<></>)}
            <span>{description}</span>
        </IconText>
    </Card>)
}


const BaseAlert = ({
    title,
    description,
    icon,
    style,
    ...other
}: AlertProps) => {
    return (<Card
        style={{
            ...BaseAlertStyle(),
            ...style
        }}
        {...other}>
        {(title) ? <h3>{title}</h3> : (<></>)}
        <span>{description}</span>
    </Card>)
}


export const Alert: React.FC<AlertProps | AlertIconProps> = ({
    title,
    description,
    icon,
    iconAlign,
    style,
}) => {

    if (icon) {
        return (<IconAlert 
            title={title}
            description={description}
            iconAlign={iconAlign}
            icon={icon}
            style={style}
        />);
    }

    if (!icon) {
        return (<BaseAlert
        title={title}
        description={description}
        icon={icon}
        style={style}
    />)
    }
}