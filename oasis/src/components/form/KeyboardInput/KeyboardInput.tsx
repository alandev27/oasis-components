import { FC, CSSProperties } from 'react';
import { InputTextAreaStyle, InputStyle } from './KeyboardInput.styles';
import { useTheme } from '../../../context/OasisProvider';

export enum InputTypes {
    NUMBER = 'number',
    TEXT = 'text',
    TEXTAREA = 'textarea'
}

interface KeyboardInputBase {
    type: InputTypes;
    defaultValue?: string | number;
    disabled?: boolean;
    style?: CSSProperties;
}

interface KeyboardTextInput extends KeyboardInputBase {
    type: InputTypes.TEXTAREA | InputTypes.TEXT;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
}

interface KeyboardTextAreaInput extends KeyboardTextInput {
    type: InputTypes.TEXTAREA;
    columns?: number;
    rows?: number;
}

interface KeyboardNumberInput extends KeyboardInputBase {
    type: InputTypes.NUMBER;
    max?: number;
    min?: number;
    step?: number;
}

type KeyboardInputProps = KeyboardTextInput | KeyboardTextAreaInput | KeyboardNumberInput;

export const Input: FC<KeyboardInputProps> = (props) => {
    switch (props.type) {
        case InputTypes.TEXTAREA:
            {
                const { placeholder, defaultValue, rows, columns } = props as KeyboardTextAreaInput;
                return <textarea 
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    rows={rows}
                    cols={columns} 
                    style={{
                        ...InputTextAreaStyle(useTheme()),
                        ...props.style
                    }} />;
            }
        case InputTypes.NUMBER:
            {
                const { defaultValue, min, max, step } = props as KeyboardNumberInput;
                return <input
                    type="number"
                    defaultValue={defaultValue}
                    min={min}
                    max={max}
                    step={step} 
                    style={{
                        ...InputStyle(useTheme()),
                        ...props.style
                    }} />;
            }
        case InputTypes.TEXT:
            {
                const { placeholder, defaultValue, minLength, maxLength } = props as KeyboardTextInput;
                return <input 
                    type="text"
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    minLength={minLength}
                    maxLength={maxLength}
                    style={{
                        ...InputStyle(useTheme()),
                        ...props.style
                    }} />;
            }
    }
};
