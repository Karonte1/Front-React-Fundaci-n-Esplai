import { forwardRef, HTMLAttributes, useId } from 'react';
import cn from '../helpers/cn';

type InputProps = {
  type: string;
  label?: string;
  error?: string;
  className?: string;
  labelClass?: string;
  errorClass?: string;
  wrapperClass?: string;
} & HTMLAttributes<HTMLInputElement>

const InputRHF = forwardRef(function InputRHF (props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) {
  const id = useId();

  const { type, label, error, className, labelClass, errorClass, wrapperClass, ...rest } = props;

  const defaultInputClasses = 'peer outline-none ring-2 ring-transparent focus:ring-violet-300  border-2 rounded px-4 py-2';
  const defaultWrapperClasses = 'flex justify-between items-center';
  const defaultErrorClasses = 'text-red-400 absolute top-full left-0 text-xs';
  const defaultLabelClasses = 'text-black text-md font-semibold';

  return (
    <div className={cn(defaultWrapperClasses, wrapperClass)}>
      {label && <label className={cn(defaultLabelClasses, labelClass)} htmlFor={id}>{label}</label>}
      <div className='relative'>
        <input
          id={id}
          type={type}
          className={cn(defaultInputClasses, className)}
          ref={ref}
          {...rest}
        />
        {error && <span className={cn(defaultErrorClasses, errorClass)}>{error}</span>}
      </div>
    </div>
  );
});

export default InputRHF;
