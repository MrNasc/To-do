import React from "react";

interface IButtonProps {
  handleEntrar: any;
  buttonEnterRef: any;
}
export const Button = React.forwardRef<HTMLInputElement, IButtonProps>(
  (props, ref) => {
    return (
      <button
        type="button"
        ref={props.buttonEnterRef}
        onClick={props.handleEntrar}
      >
        Login
      </button>
    );
  }
);
