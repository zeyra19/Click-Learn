import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface WordCardProps {
  word: string;
  meaning: string;
}

const WordCard: React.FC<WordCardProps> = ({ word, meaning }) => {
  return (
    <Card variant="outlined" sx={{ marginY: 2 }}>
      <CardContent>
        <Typography variant="h4">{word}</Typography>
        <Typography variant="body1" color="text.secondary">
          {meaning}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WordCard;
