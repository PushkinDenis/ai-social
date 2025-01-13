import { FC, useRef } from 'react';
import { Button } from '@/components/ui/button';

export const App: FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonSecRef = useRef<HTMLButtonElement>(null);

  const handleRef = () => {
    buttonRef.current?.focus();
  };
  const handleSecRef = () => {
    buttonSecRef.current?.classList.add('bg-red');
  };
  return (
    <div className="flex bg-lightRed text-red w-full h-screen items-center justify-center">
      <Button
        variant={'destructive'}
        onClick={handleRef}
        ref={buttonSecRef}
        className="focus:outline-none focus:bg-slate-600 focus:ring focus:ring-violet-300"
      >
        Кнопк
      </Button>
      <Button
        className="focus:outline-none focus:bg-slate-600 focus:ring focus:ring-violet-300"
        onClick={handleSecRef}
        ref={buttonRef}
      >
        Кнопк
      </Button>
    </div>
  );
};
