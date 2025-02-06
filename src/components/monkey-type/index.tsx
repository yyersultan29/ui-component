import { useCallback, useEffect, useState } from 'react';
import { mapLetters } from './utils/map-letters';
import { text } from './constants';
import { getLetterColor } from './utils/get-letter-color';
import { LetterStatus } from './types';

export const MonkeyType = () => {
  const [index, setIndex] = useState(0);
  const [letters, setLetters] = useState(() => mapLetters(text));

  const onPressKey = useCallback(
    (e: globalThis.KeyboardEvent) => {
      if (index >= letters.length) return; // Prevent out-of-bounds access

      const updatedLetters = letters.map((letter, i) =>
        i === index
          ? {
              ...letter,
              status:
                letter.char === e.key
                  ? LetterStatus.SUCCESS
                  : LetterStatus.ERROR,
            }
          : letter,
      );

      setLetters(updatedLetters);
      setIndex((prev) => prev + 1);
    },
    [letters, index],
  );

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => onPressKey(e);

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [onPressKey]);

  return (
    <div>
      {letters.map((item) => (
        <span
          key={item.index}
          style={{
            color: getLetterColor(item.status),
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          {item.char}
        </span>
      ))}
    </div>
  );
};
