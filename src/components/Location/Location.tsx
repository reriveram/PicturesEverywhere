import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text, View} from 'react-native';
import {LocationType} from './type';
import {styles} from './styles';
import {getLocationText} from '../../utils';

interface LocationProps {
  location: LocationType;
}

export default function Location({location}: LocationProps) {
  return (
    <View style={styles.locationContainer}>
      <MaterialIcons name="location-pin" size={30} color="black" />
      <Text style={styles.location}>{getLocationText(location)}</Text>
    </View>
  );
}
