import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TabIconProps} from './types';

const GalleryIcon = ({color, size}: TabIconProps) => (
  <MaterialIcons name="photo-library" size={size} color={color} />
);

export default GalleryIcon;
