import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TabIconProps} from './types';

const PictureIcon = ({color, size}: TabIconProps) => (
  <MaterialIcons name="camera-alt" size={size} color={color} />
);

export default PictureIcon;
