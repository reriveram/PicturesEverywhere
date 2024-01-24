import React, {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {useRef} from 'react';
import {AppState, TouchableOpacity, View} from 'react-native';
import {
  Camera as CameraRef,
  PhotoFile,
  Camera as VisionCamera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

import {styles} from './styles';
import {NoCameraDeviceError} from '../NoCameraDeviceError';

interface CameraProps {
  handleCapturePhoto: (photoTaken: PhotoFile) => void;
}

export default function Camera({handleCapturePhoto}: CameraProps) {
  const {hasPermission, requestPermission} = useCameraPermission();

  const camera = useRef<CameraRef>(null);

  const device = useCameraDevice('back');

  const isFocused = useIsFocused();
  const appState = useRef(AppState.currentState);
  const isActive = isFocused && appState.current === 'active';

  useEffect(() => {
    async function getPermission() {
      requestPermission();
    }

    if (!hasPermission) {
      getPermission();
    }
  }, [hasPermission, requestPermission]);

  async function capturePhoto() {
    if (camera.current !== null) {
      const photoTaken = await camera?.current?.takePhoto({
        qualityPrioritization: 'speed',
        flash: 'off',
        enableShutterSound: false,
      });
      handleCapturePhoto(photoTaken);
    }
  }

  if (device == null) {
    return <NoCameraDeviceError />;
  }

  return (
    <View>
      <VisionCamera
        ref={camera}
        style={styles.camera}
        device={device}
        isActive={isActive}
        photo={true}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.camButtonHalo}>
          <TouchableOpacity style={styles.camButton} onPress={capturePhoto} />
        </View>
      </View>
    </View>
  );
}
