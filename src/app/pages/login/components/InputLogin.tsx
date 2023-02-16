import React from "react";

interface IInputLoginProps {
    label: string;
    value: string;
    type?: string;
    onChange: (newValue: string) => void;
    onPressEnter?: () => void;
}             // interface por causa da tipagem, primeiro coloca um 'I' de interface e depois o nome exato do componente + Props
export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {            //React.FC = componente funcional do react

    return (
        <label>
            <span>{props.label}</span>
            <input                          // 'e' na funcao parece significar evento
                ref={ref}
                value={props.value}
                type={props.type}
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter' 
                ? props.onPressEnter && props.onPressEnter() 
                : undefined
            }
            />
        </label>
    );
});