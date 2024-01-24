import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {GalleryScreenProps} from '../../navigation/stackNavigator/types';
import {styles} from './styles';

import {Thumbnail} from '../../components/Thumbnail';
import NoPictures from '../../components/NoPictures/NoPictures';
import {usePicturesContext} from '../../hooks';

export default function Gallery({navigation}: GalleryScreenProps) {
  const {isLoadingPictures, pictures} = usePicturesContext();
  const isPicturesEmpty = pictures.length === 0;

  if (isLoadingPictures) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isPicturesEmpty) {
    return <NoPictures navigation={navigation} />;
  }
  return (
    <FlatList
      numColumns={2}
      data={pictures}
      contentContainerStyle={styles.list}
      renderItem={({item}) => (
        <Thumbnail picture={item} navigation={navigation} />
      )}
      scrollEnabled={true}
    />
  );
}
