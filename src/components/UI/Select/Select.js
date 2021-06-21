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
  def,
  changeHandler,
}) => {
  const optionsArr = options.map((value) => {
    return def === value ? (
      <option key={value} value={value}>
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </option>
    ) : (
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
      <select
        name={inpFor}
        id={inpFor}
        className="select-item__select"
        onChange={(...args) => changeHandler(...args)}
        defaultValue={def}
        value={value}
      >
        {optionsArr}
      </select>
      {touched && error ? <p className="select-item__error">{error}</p> : null}
    </div>
  );
};

export default Select;
