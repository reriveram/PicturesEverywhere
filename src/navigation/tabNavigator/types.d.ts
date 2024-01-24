import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

export type BottomTabBarParamList = {
  Gallery: none;
  Capture: none;
};

export type CaptureScreenProps = BottomTabBarProps<
  BottomTabBarParamList,
  'Capture'
>;

export type GalleryScreenProps = BottomTabBarProps<
  BottomTabBarParamList,
  'Gallery'
>;
