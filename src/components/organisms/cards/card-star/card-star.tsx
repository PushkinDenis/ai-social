import { FC } from 'react';
import { Card, CardTitle, CardContent, CardDescription } from '@atoms';

export const CardStar: FC = () => (
  <Card colorSchema="purple">
    <CardTitle>Social Media 10x Faster with AI</CardTitle>
    <CardContent>Stars</CardContent>
    <CardDescription>Over 4,000 5-star reviews</CardDescription>
  </Card>
);
