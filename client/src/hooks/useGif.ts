import { useState, useEffect } from 'react';

import { gifs as arrayGifs } from '../utils';
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
  P: '#124670',
  R: '#701217',
  I: '#88418c',
  M: '#12706b',
  O: '#c7ece6',
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
