import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface WordCardProps {
  word: string;
  meaning: string;
}

const WordCard: React.FC<WordCardProps> = ({ word, meaning }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        marginY: 2,
        padding: '1rem',
        borderRadius: '16px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f5f5f5',
        '@media (max-width:600px)': {
          padding: '0.8rem',
        },
      }}
    >
      <CardContent
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#333',
            fontSize: { xs: '1.8rem', sm: '2rem' },
          }}
        >
          {word}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#555',
            fontSize: { xs: '1rem', sm: '1.2rem' },
            marginTop: '0.5rem',
          }}
        >
          {meaning}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WordCard;
