import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { LEVELS } from '../../utils/constants';

interface ButtonGroupProps {
  onLevelSelect: (level: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onLevelSelect }) => {
  const [selectedCard, setSelectedCard] = useState<"A1" | "A2" | "B1" | "B2" | "C1" | "C2" | null>(null);

  return (
    <Box
      display="flex"
      justifyContent="center"
      gap={1}
      marginY={2}
      flexWrap="wrap"
      paddingX={2}
      sx={{
        '@media (max-width:600px)': {
          gap: 0.5,
          paddingX: 0.5,
          flexWrap: 'nowrap',
          overflowX: 'auto',
        },
        '@media (min-width:900px)': {
          gap: 0.8,
          paddingX: 4,
        },
      }}
    >
      {LEVELS.map((level) => (
        <Button
          key={level}
          variant="contained"
          onClick={() => {
            setSelectedCard(level);
            onLevelSelect(level);
          }}
          sx={{
            padding: '12px 16px',
            borderRadius: '8px',
            textTransform: 'none',
            whiteSpace: 'nowrap',
            fontWeight: 600,
            fontSize: '15px',
            backgroundColor: selectedCard === level ? '#d7d7d4' : '#939391',
            color: selectedCard === level ? 'black' : 'white',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: selectedCard === level ? '#d7d7d4' : '#5a5853',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            },
            '&:active': {
              backgroundColor: '#82817e',
            },
            '&:focus': {
              outline: 'none',
              boxShadow: '0 0 0 2px rgba(38, 166, 154, 0.6)',
            },
            '@media (max-width:600px)': {
              fontSize: '11px',
              padding: '4px 4px',
              minWidth: '50px',
            },
            '@media (min-width:900px)': {
              fontSize: '11px',
              padding: '8px 6px',
            },
          }}
          aria-label={`Select level ${level}`}
        >
          {level}
        </Button>
      ))}
    </Box>
  );
};

export default ButtonGroup;
