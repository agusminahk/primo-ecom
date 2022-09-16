import {useState} from 'react'

import { gifs } from '../utils/home';
import { Gifs, Title} from '../utils/interfaces';

const useGif = () => {

    const [gif, setGif] = useState<{ type: string; boolean: boolean }>({ type: '', boolean: false });

    const renderGifs = (gifs: Gifs[]) => {
        const result = gifs.map(gif => gif);
        return result;
      };
return ()

}

export default useGif