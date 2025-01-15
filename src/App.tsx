import { FC, useRef, useState, ChangeEvent } from 'react';
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
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleRef = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col bg-background text-red w-full h-screen items-center justify-center">
      <Card className="" variant={'purple'}>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            onChange={handleChange}
            ref={inputRef}
            className="outline-violet-800 overflow-hidden max-w-full w-64"
          ></Input>
          <div className="w-full max-w-xs overflow-hidden text-ellipsis break-words6">
            HEllO: {text}
          </div>
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
      <Card className="" variant={'yellow'}>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            onChange={handleChange}
            ref={inputRef}
            className="outline-violet-800 overflow-hidden max-w-full w-64"
          ></Input>
          <div className="w-full max-w-xs overflow-hidden text-ellipsis break-words6">
            HEllO: {text}
          </div>
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
      <Card className="" variant={'violet'}>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            onChange={handleChange}
            ref={inputRef}
            className="outline-violet-800 overflow-hidden max-w-full w-64"
          ></Input>
          <div className="w-full max-w-xs overflow-hidden text-ellipsis break-words6">
            HEllO: {text}
          </div>
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
