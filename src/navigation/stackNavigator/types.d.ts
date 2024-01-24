import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PictureType} from '../../types';

export type StackNavigatorParamList = {
  Gallery: unknown;
  Picture: {picture: PictureType};
};

export type PictureScreenProps = NativeStackScreenProps<
  StackNavigatorParamList,
  'Picture'
>;

export type GalleryScreenProps = NativeStackScreenProps<
  StackNavigatorParamList,
  'Gallery'
>;
