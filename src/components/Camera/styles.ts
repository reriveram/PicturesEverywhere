import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  camera: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 500,
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  camButtonHalo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: 'white',
    backgroundColor: '#434747',
    borderWidth: 4,
    alignSelf: 'center',
  },
  camButton: {
    height: 67,
    width: 67,
    borderRadius: 40,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});
