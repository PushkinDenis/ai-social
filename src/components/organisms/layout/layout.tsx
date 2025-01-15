import { FC } from 'react';
import { Card } from '@atoms';
import { CardStar } from '../cards';

export const Layout: FC = () => (
  <div className="grid-layout w-full h-full">
    <div className="grid-area-a">{<CardStar />}</div>
    <div className="grid-area-b">{<Card colorSchema="white" />}</div>
    <div className="grid-area-c ">{<Card colorSchema="yellow" />}</div>
    <div className="grid-area-d">{<Card colorSchema="violet" />}</div>
    <div className="grid-area-e">{<Card colorSchema="purple" />}</div>
    <div className="grid-area-f">{<Card colorSchema="white" />}</div>
    <div className="grid-area-g">{<Card colorSchema="lightYellow" />}</div>
    <div className="grid-area-h">{<Card colorSchema="yellow" />}</div>
  </div>
);
