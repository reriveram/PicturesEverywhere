import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Location} from '../../components/Location';

import {PictureNotAvailable} from '.';
import {PictureScreenProps} from '../../navigation/stackNavigator/types';
import {useShareImage} from '../../hooks';

export default function Picture({route}: PictureScreenProps) {
  const {picture} = route.params;
  const {shareImage} = useShareImage();
  if (!picture) {
    return <PictureNotAvailable />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.shareButton}
        onPress={() => shareImage(`file://${picture.uri}`)}>
        <Ionicons name="share" size={40} color="black" />
      </TouchableOpacity>

      <Image
        source={{
          uri: picture.uri,
        }}
        style={styles.image}
      />
      {picture.location && <Location location={picture.location} />}
    </View>
  );
}
