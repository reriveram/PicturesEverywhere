import React, {useState} from 'react';
import {View} from 'react-native';
import {PhotoFile} from 'react-native-vision-camera';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {CaptureScreenProps} from '../../navigation/tabNavigator/types';

import {Preview} from '../../components/Preview';
import {Camera} from '../../components/Camera';
import {usePicturesContext} from '../../hooks';

export default function Capture({navigation}: CaptureScreenProps) {
  const [picture, setPicture] = useState<null | PhotoFile>(null);
  const {savePicture} = usePicturesContext();

  function handleCapturePhoto(photoTaken: PhotoFile) {
    if (photoTaken) {
      setPicture(photoTaken);
    }
  }

  async function handleSavePhoto() {
    if (picture) {
      try {
        await CameraRoll.save(picture?.path, {
          type: 'photo',
          album: 'PicturesEverywhere',
        });
        savePicture(picture?.path);
        handlePostSaveActions();
      } catch (error) {
        console.error('Not able to save photo:', error);
      }
    }
  }

  function handlePostSaveActions() {
    navigation.navigate('Gallery');
    setPicture(null);
  }

  function handleCancel() {
    setPicture(null);
  }

  return (
    <View>
      {!picture ? (
        <Camera handleCapturePhoto={handleCapturePhoto} />
      ) : (
        <Preview
          picture={picture}
          handleCancel={handleCancel}
          handleSavePhoto={handleSavePhoto}
        />
      )}
    </View>
  );
}
