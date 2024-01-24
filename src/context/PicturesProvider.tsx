import React, {ReactNode, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PictureType} from '../types';

import Geolocation from '@react-native-community/geolocation';
import {PicturesContext} from '.';

const PICTURES = 'PICTURES';

const PicturesProvider = ({children}: {children: ReactNode}) => {
  const [isLoadingPictures, setIsLoadingPictures] = useState(false);
  const [pictures, setPictures] = useState<PictureType[]>([]);

  function savePicture(uri: string) {
    Geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        setPictures([
          ...pictures,
          {
            uri,
            location: {
              latitude: Number(latitude.toFixed(4)),
              longitude: Number(longitude.toFixed(4)),
            },
          },
        ]);
      },
      () =>
        setPictures([
          ...pictures,
          {
            uri,
          },
        ]),
    );
  }

  useEffect(() => {
    async function storePictures() {
      if (!pictures) {
        try {
          await AsyncStorage.setItem(PICTURES, JSON.stringify(pictures));
        } catch (error) {
          console.error('Not able to store pictures:', error);
        }
      }
    }
    storePictures();
  }, [pictures]);

  useEffect(() => {
    async function loadPictures() {
      setIsLoadingPictures(true);
      try {
        const serializedPictures = await AsyncStorage.getItem(PICTURES);
        if (serializedPictures) {
          setPictures(JSON.parse(serializedPictures));
        }
      } catch (error) {
        console.error('Not able to load pictures:', error);
      }
      setIsLoadingPictures(false);
    }
    loadPictures();
  }, []);

  return (
    <PicturesContext.Provider
      value={{
        isLoadingPictures,
        pictures,
        savePicture,
      }}>
      {children}
    </PicturesContext.Provider>
  );
};

export default PicturesProvider;
