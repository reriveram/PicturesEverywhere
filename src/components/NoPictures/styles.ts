import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginVertical: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7,
    gap: 30,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: '700',
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: '700',
  },
});
