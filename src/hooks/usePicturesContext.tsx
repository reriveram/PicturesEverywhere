import {useContext} from 'react';
import {PicturesContextType} from '../context/type';
import {PicturesContext} from '../context';

const usePicturesContext = () => {
  const contextValue = useContext<PicturesContextType | null>(PicturesContext);

  if (!contextValue) {
    throw new Error(
      'usePicturesContext must be used within a PicturesContextProvider ',
    );
  }
  const {isLoadingPictures, pictures, savePicture} = contextValue;
  return {
    isLoadingPictures,
    pictures,
    savePicture,
  };
};

export default usePicturesContext;
