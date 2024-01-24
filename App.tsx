import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import {TabNavigator} from './src/navigation/tabNavigator';
import {PicturesProvider} from './src/context';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <PicturesProvider>
        <SafeAreaView style={styles.appContainer}>
          <TabNavigator />
        </SafeAreaView>
      </PicturesProvider>
    </NavigationContainer>
  );
}

export default App;
