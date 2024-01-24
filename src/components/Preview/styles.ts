import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  image: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 600,
    width: '95%',
  },
  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
});
