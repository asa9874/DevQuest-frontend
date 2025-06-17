import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, type, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-slate-100 mb-1" htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        className="w-full px-4 py-2 rounded-lg bg-slate-700 text-slate-100 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
