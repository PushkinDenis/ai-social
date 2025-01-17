import { FC } from 'react';
import { Card, CardHeader, CardContent, CardDescription } from '@atoms';

export const CardStar: FC = () => (
  <Card colorSchema="purple">
    <CardHeader className="text-white">
      <h1>
        <span className="flex flex-col justify-center items-center">
          <span>
            Social Media <span className="text-yellow">10x</span>
          </span>
          <span>
            <i>Faster</i> with AI
          </span>
        </span>
      </h1>
    </CardHeader>
    <CardContent>Stars</CardContent>
    <CardDescription>Over 4,000 5-star reviews</CardDescription>
  </Card>
);
