import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, ...props }, ref) {
  return (
    <p>
      <label>{label}</label>
      <input ref={ref} className={classes} {...props} />
    </p>
  );
});

export default Input;
