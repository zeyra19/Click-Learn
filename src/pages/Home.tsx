import React, { useState } from 'react';
import ButtonGroup from '../components/ButtonGroup/ButtonGroup';
import WordCard from '../components/WordCard/WordCard';
import { getWordsByLevel } from '../services/wordService';
import { IconButton, Box, Typography, Tooltip} from '@mui/material';
import { ArrowBack, ArrowForward, Refresh } from '@mui/icons-material';
import './Home.css';

const Home: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [words, setWords] = useState<{ word: string; meaning: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [animation, setAnimation] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLevelSelect = async (level: string) => {
    setSelectedLevel(level);
    setLoading(true);
    const fetchedWords = await getWordsByLevel(level);
    console.log(fetchedWords)
    setWords(fetchedWords);
    setLoading(false);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (currentIndex < words.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setAnimation('slide-out-left');

      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setAnimation('slide-in-right');
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setAnimation('slide-out-right');

      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setAnimation('slide-in-left');
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleRefresh = async () => {
    if (selectedLevel) {
      setLoading(true);
      const fetchedWords = await getWordsByLevel(selectedLevel);
      setWords(fetchedWords);
      setLoading(false);
      setCurrentIndex(0);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        height: '90vh',
      }}
    >
      <Box
        sx={{
          border: '2px solid #464545',
          padding: { xs: '1rem', sm: '1.5rem' },
          borderRadius: '10px',
          width: '90%',
          maxWidth: '600px',
          backgroundColor: '#fff',
          margin: { xs: '1rem', sm: '0' },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            fontSize: { xs: '1.5rem', sm: '2rem' },
            color: '#464545',
          }}
        >
          Seviyene Göre 10 İngilizce Kelime Öğren
        </Typography>
        <ButtonGroup onLevelSelect={handleLevelSelect} />
        {loading && <Typography>Loading...</Typography>}
        {!loading && words.length > 0 && (
          <Box className={`card-container ${animation}`}>
            <WordCard
              word={words[currentIndex]?.word}
              meaning={words[currentIndex]?.meaning}
            />
          </Box>
        )}
        {!loading && words.length > 0 && (
          <Box
            sx={{
              display: 'flex',
              gap: '0.5rem',
              marginTop: '1.5rem',
              justifyContent: 'center',
            }}
          >
            <IconButton
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              sx={{
                color: currentIndex === 0 ? 'gray' : 'black',
              }}
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              onClick={handleNext}
              disabled={currentIndex === words.length - 1}
              sx={{
                color: currentIndex === words.length - 1 ? 'gray' : 'black',
              }}
            >
              <ArrowForward />
            </IconButton>
            <Tooltip title="Kelimeleri Yenile">
              <IconButton
                onClick={handleRefresh}
                disabled={loading}
                sx={{
                  color: loading ? 'gray' : 'black',
                }}
              >
                <Refresh />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
