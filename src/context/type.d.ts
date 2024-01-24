export type PicturesContextType = {
  isLoadingPictures: boolean;
  pictures: Picture[];
  savePicture: (uri: string) => void;
};
