import React from 'react';

const FormItem = ({ children, type: Type, name, onChange, date }) => {
  return (
    <div className="mb-4">
      <Type
        className={`form-item block border py-1.5 px-1 w-40 sm:w-60 md:w-80 border-green-400 outline-none focus:shadow-sm focus:border-gray-200
        `}
        onChange={onChange}
        placeholder={children}
        type={date ? date : 'text'}
        id={name}
        name={name}
        rows={4}
      />
      <label
        className="relative -top-8 left-1 form-label block text-gray-500"
        htmlFor={name}
      >
        {children}
      </label>
    </div>
  );
};

export default FormItem;
