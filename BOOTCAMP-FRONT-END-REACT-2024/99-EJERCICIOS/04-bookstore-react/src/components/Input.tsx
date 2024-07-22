import { HTMLAttributes } from 'react';

type InputProps = {
  type: string;
  label: string;
  value: string;
  name: string;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
} & HTMLAttributes<HTMLInputElement>

function Input (props: InputProps) {
  const { type, label, value, name, handler, error, ...rest } = props;

  return (
    <label className='flex justify-between items-center'>
    {label}
    <div className='relative'>
      <input
        type={type}
        className='peer outline-none ring-2 ring-transparent focus:ring-violet-300  focus:invalid:ring-red-400 invalid:ring-red-400 border-2 rounded px-4 py-2'
        value={value}
        onChange={handler}
        name={name}
        {...rest}
      />
      {error && <span className='text-red-400 absolute top-full left-0 text-xs'>{error}</span>}
    </div>
  </label>
  );
}

export default Input;
