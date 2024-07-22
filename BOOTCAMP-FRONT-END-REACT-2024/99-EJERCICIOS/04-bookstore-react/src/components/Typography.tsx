import { HTMLAttributes } from 'react';
import cn from '../helpers/cn';

type TypographyProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>;

// interface TypographyProps extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
//   as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
//   className?: string;
//   children: React.ReactNode;
// }

function Typography (props: TypographyProps) {
  const { as, children, className, ...rest } = props;

  const validTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const Tag = as && validTags.includes(as) ? as : 'p';

  const styles = {
    h1: 'font-bold text-5xl',
    h2: 'font-bold text-4xl',
    h3: 'font-bold text-3xl',
    h4: 'font-bold text-2xl',
    h5: 'font-bold text-xl',
    h6: 'font-bold text-lg',
    p: 'font-semibold text-base'
  };

  return (
    <Tag className={cn(styles[Tag], className)} {...rest} >{children}</Tag>
  );
}

export default Typography;
