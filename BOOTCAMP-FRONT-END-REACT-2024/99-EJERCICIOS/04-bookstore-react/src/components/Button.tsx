import { HTMLAttributes } from 'react';
import cn from '../helpers/cn';

// todo: Buscar el tipado correctgo porque dice que type="" no se puede poner
type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
} & HTMLAttributes<HTMLButtonElement>

function Button (props: ButtonProps) {
  const { children, disabled, className, ...rest } = props;

  const defaultClasses = 'bg-emerald-400 rounded text-white px-4 py-2 hover:bg-emerald-300 disabled:opacity-60 disabled:bg-slate-300';
  const classes = cn(defaultClasses, className);

  return (
    <button disabled={disabled} className={classes} {...rest}>{children}</button>
  );
}

export default Button;
