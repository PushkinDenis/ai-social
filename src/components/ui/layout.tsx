import { FC } from 'react';

export const Layout: FC = () => {
  return (
    <div className="grid-layout w-full h-full">
      <div className="grid-area-a bg-rose-700">A</div>
      <div className="grid-area-b bg-blue-500">B</div>
      <div className="grid-area-c bg-green-500">C</div>
      <div className="grid-area-d bg-cyan-600">D</div>
      <div className="grid-area-e bg-pink-300">E</div>
      <div className="grid-area-f bg-pink-500">F</div>
      <div className="grid-area-g bg-gray-500">G</div>
      <div className="grid-area-h bg-orange-500">H</div>
    </div>
  );
};
