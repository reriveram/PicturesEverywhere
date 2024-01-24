import {createContext} from 'react';
import {PicturesContextType} from './type';

const PicturesContext = createContext<PicturesContextType | null>({
  isLoadingPictures: false,
  pictures: [],
  savePicture: () => null,
});

export default PicturesContext;
