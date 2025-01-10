import { FC } from 'react';
import { Button } from '@/components/ui/button';

export const App: FC = () => (
  <div className="flex bg-lightRed text-red w-full h-screen items-center justify-center">
    <Button variant={'destructive'}>Кнопк</Button>
  </div>
);
