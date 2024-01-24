import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {PhotoFile} from 'react-native-vision-camera';
import {styles} from './styles';

interface PreviewProps {
  picture: PhotoFile;
  handleCancel: () => void;
  handleSavePhoto: () => void;
}

export default function Preview({
  picture,
  handleCancel,
  handleSavePhoto,
}: PreviewProps) {
  return (
    <View>
      <Image
        source={{
          uri: picture.path,
        }}
        style={styles.image}
      />
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={handleCancel}>
          <MaterialIcons name="cancel" size={50} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSavePhoto}>
          <MaterialIcons name="check-circle" size={50} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
