import { FC, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export const App: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleRef = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col bg-lightRed text-red w-full h-screen items-center justify-center">
      <Card className="flex flex-col items-center justify-center">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Input ref={inputRef} className="outline-violet-800"></Input>
        </CardContent>
        <CardFooter>
          <Button
            variant={'destructive'}
            onClick={handleRef}
            className="focus:outline-none focus:bg-slate-600 focus:ring focus:ring-violet-300"
          >
            Кнопк
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
