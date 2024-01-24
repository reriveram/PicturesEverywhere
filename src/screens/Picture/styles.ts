import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 7,
    gap: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  shareButton: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 100,
    alignItems: 'flex-end',
    top: 10,
    right: 10,
    zIndex: 20,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '90%',
    borderRadius: 4,
  },
});
