import { ImSpinner2 } from 'react-icons/im';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  className?: React.StyleHTMLAttributes<HTMLImageElement>['className'];
}

export const LoadingSpinner: React.FC<Props> = ({
  size = 'md',
  isLoading = true,
  className,
}) => {
  if (!isLoading) return null;

  return (
    <ImSpinner2
      className={`m-auto animate-spin
        ${className}
        ${size === 'sm' && 'size-6'} 
        ${size === 'md' && 'size-10'}
        ${size === 'lg' && 'size-14'}
      `}
    />
  );
};
