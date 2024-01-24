import React from 'react';
import {Button} from 'react-native';

interface BackButtonProps {
  onPress: () => void;
  title?: string;
  color?: string;
}
export default function BackButton({
  onPress,
  title = 'Back',
  color = '#fff',
}: BackButtonProps) {
  return <Button onPress={onPress} title={title} color={color} />;
}
