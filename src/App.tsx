import { FC, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const App: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleRef = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="flex bg-lightRed text-red w-full h-screen items-center justify-center">
      <Input ref={inputRef}></Input>
      <Button
        variant={'destructive'}
        onClick={handleRef}
        className="focus:outline-none focus:bg-slate-600 focus:ring focus:ring-violet-300"
      >
        Кнопк
      </Button>
    </div>
  );
};
