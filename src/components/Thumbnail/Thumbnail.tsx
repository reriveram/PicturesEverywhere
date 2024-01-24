import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {GalleryScreenProps} from '../../navigation/stackNavigator/types';
import {PictureType} from '../../types';
import {styles} from './styles';

interface ThumbnailProps {
  picture: PictureType;
  navigation: GalleryScreenProps['navigation'];
}

export default function Thumbnail({picture, navigation}: ThumbnailProps) {
  function handleOpenPhoto() {
    navigation?.navigate('Picture', {picture});
  }

  return (
    <TouchableOpacity
      style={styles.container}
      key={picture?.uri}
      onPress={handleOpenPhoto}>
      <Image source={{uri: picture.uri}} style={styles.image} />
    </TouchableOpacity>
  );
}
