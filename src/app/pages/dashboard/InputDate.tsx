import React from "react";


interface IInputDateProps {
    value: string;
    type?: string;
    onChange: (newValue: string) => void;
    
}             
export const InputDate = React.forwardRef<HTMLInputElement, IInputDateProps>((props, ref) => {            

    return (
        <label>
            <span></span>
            <input 
            className="text-black form-input bg-zinc-300  shadow-inner shadow-stone-500 inline-flex items-center justify-center flex-1 rounded py-0.5 font-size: 13px;
            line-height: 1;
            box-shadow: 0 0 0 1px var(--violet7);
            height: 25px;"                        
                ref={ref}
                value={props.value}
                type={props.type}
                onChange={e => props.onChange(e.target.value)}
                            />
        </label>
    );
});