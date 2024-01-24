import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {GalleryScreenProps} from '../../navigation/tabNavigator/types';

interface NoPicturesProps {
  navigation: GalleryScreenProps['navigation'];
}

export default function NoPictures({navigation}: NoPicturesProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No pictures taken yet</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Capture');
        }}
        style={styles.button}>
        <MaterialIcons name="photo-camera" size={50} color="white" />
        <Text style={styles.buttonText}>Take Picture</Text>
      </TouchableOpacity>
    </View>
  );
}
