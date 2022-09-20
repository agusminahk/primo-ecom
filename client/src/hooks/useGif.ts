import { useState, useEffect } from 'react';

import { gifs as arrayGifs } from '../utils/home';
import type { Gifs, Title } from '../utils/interfaces';

interface Colors {
  P?: string;
  R?: string;
  I?: string;
  M?: string;
  O?: string;
  ['']?: string;
}

const colors: Colors = {
  P: '#31b0cc',
  R: 'violet',
  I: 'white',
  M: 'pink',
  O: '#ff4d00',
};

interface Gif {
  type?: Title;
  url?: string;
  isActive?: boolean;
  color?: string;
}

const useGif = () => {
  const [gif, setGif] = useState<Gif>({ type: '', url: '', color: '', isActive: false });

  useEffect(() => {
    arrayGifs.map(
      ({ letter, url }: Gifs) => gif.type === letter && setGif({ ...gif, type: letter, url, color: colors[letter] }),
    );
  }, [gif.isActive]);

  return { gif, setGif };
};

export default useGif;
