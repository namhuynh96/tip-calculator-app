import { useState, useRef, useEffect } from "react";

import classes from "./Input.module.css";

const Input = ({
  initialValue,
  label,
  icon,
  onChange,
  className,
  validator,
  autoFous,
  errorMsg,
}) => {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFous) {
      inputRef.current.focus();
    }
  }, [autoFous]);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (event) => {
    let value = event.target.value;
    if (value === ".") {
      value = "0";
    }
    if (isNaN(value)) {
      return;
    }
    if (validator) {
      const { isValid, formattedValue } = validator(Number(value));
      if (!isValid) {
        return;
      }
      value = formattedValue.toString();
    }

    while (value.charAt(0) === "0") {
      value = value.substring(1);
    }
    if (value === "") {
      value = "0";
    }

    setValue(value);
    onChange(value);
  };

  return (
    <div>
      {(label || errorMsg) && (
        <div className={classes.header}>
          {label && <div className={classes.label}>{label}</div>}
          {errorMsg && <div className={classes.errorMsg}>{errorMsg}</div>}
        </div>
      )}
      <div className={`${classes.inputWrapper} ${className}`}>
        {icon}
        <input
          className={errorMsg ? classes.errorInput : ""}
          ref={inputRef}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Input;
