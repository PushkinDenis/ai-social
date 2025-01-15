import { cva, type VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes, Ref } from 'react';
import { cn } from '@/lib/utils';

interface ICardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  ref?: Ref<HTMLDivElement>;
}

const cardVariants = cva(
  'flex flex-col w-full h-full items-center justify-center rounded-[0.5rem] border bg-card text-card-foreground shadow',
  {
    variants: {
      colorSchema: {
        purple: 'bg-purple',
        violet: 'bg-violet',
        yellow: 'bg-yellow',
        lightYellow: 'bg-lightYellow',
        white: 'bg-white',
      },
    },
  },
);

export const Card: FC<ICardProps> = ({ className, ref, colorSchema, ...props }) => (
  <div ref={ref} className={cn(cardVariants({ colorSchema, className }))} {...props} />
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
