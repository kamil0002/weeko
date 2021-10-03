import React from 'react';

const RadioItem = ({ children, onChange, checked, value }) => {
  return (
    <div className="radio-item">
      <input
        onChange={onChange}
        type="radio"
        value={value}
        checked={checked}
        className="hidden"
        id={children}
        name="type"
      />
      <label className="radio-label text-lg text-green-800" htmlFor={children}>
        <span></span>
        {children}
      </label>
    </div>
  );
};

export default RadioItem;
