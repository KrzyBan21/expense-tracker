import React from "react";
import "./Select.scss";

const Select = ({
  inpFor,
  children,
  options,
  change,
  value,
  error,
  blur,
  touched,
}) => {
  const optionsArr = options.map((value) => {
    return (
      <option key={value} value={value}>
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </option>
    );
  });

  return (
    <div className="select-item">
      <label htmlFor={inpFor} className="select-item__label">
        {children}
      </label>
      <select name={inpFor} id={inpFor} className="select-item__select">
        {optionsArr}
      </select>
      {touched && error ? <p className="select-item__error">{error}</p> : null}
    </div>
  );
};

export default Select;
