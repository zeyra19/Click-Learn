export const getWordsByLevel = async (level: string): Promise<{ word: string; meaning: string }[]> => {
  try {
    const response = await fetch('/words.json');
    const data = await response.json();

    const words = data[level as keyof typeof data] || [];

    const shuffledWords = words.sort(() => Math.random() - 0.5);

    return shuffledWords.slice(0, 10);
  } catch (error) {
    console.error("JSON dosyası yüklenirken hata:", error);
    return [];
  }
};
