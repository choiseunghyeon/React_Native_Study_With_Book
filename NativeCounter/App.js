/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Counter from './Counter';

const App = () => {
  const [value, setValue] = useState(1);

  const onPressLeftButton = () => {
    setValue(value + 1);
  };

  const onPressRightButton = a => {
    console.log(a);
    setValue(value - 1);
  };
  return (
    // <SafeAreaView style={backgroundStyle}>
    // </SafeAreaView>
    <Counter
      style={{flex: 1}}
      value={value}
      leftButtonText="+1"
      rightButtonText="-1"
      onPressLeftButton={onPressLeftButton}
      onPressRightButton={onPressRightButton}
    />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
