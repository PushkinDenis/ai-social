import { FC, HTMLAttributes, Ref } from 'react';
import { cn } from '@/lib/utils';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
}

export const Card: FC<ICardProps> = ({ className, ref, ...props }) => (
  <div
    ref={ref}
    className={cn('rounded-xl border bg-card text-card-foreground shadow', className)}
    {...props}
  />
);

export const CardHeader: FC<ICardProps> = ({ className, ref, ...props }) => (
  <div
    ref={ref}
    className={cn('flex flex-col items-center space-y-1.5 p-6', className)}
    {...props}
  />
);

export const CardTitle: FC<ICardProps> = ({ className, ref, ...props }) => (
  <div
    ref={ref}
    className={cn('font-semibold leading-none tracking-tight', className)}
    {...props}
  />
);

export const CardDescription: FC<ICardProps> = ({ className, ref, ...props }) => (
  <div ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
);

export const CardContent: FC<ICardProps> = ({ className, ref, ...props }) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
);

export const CardFooter: FC<ICardProps> = ({ className, ref, ...props }) => (
  <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
);
