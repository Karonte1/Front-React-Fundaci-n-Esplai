import cn from '../helpers/cn';

type HeadingProps = {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
}

function Heading ({ level, children, className }: HeadingProps) {
  const validLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const Tag = level && validLevels.includes(level) ? level : 'h1';

  const styles = {
    h1: 'text-5xl',
    h2: 'text-4xl',
    h3: 'text-3xl',
    h4: 'text-2xl',
    h5: 'text-xl',
    h6: 'text-lg'
  };

  return (
    <Tag className={cn('font-bold', styles[Tag], className)}>{children}</Tag>
  );
}

export default Heading;
