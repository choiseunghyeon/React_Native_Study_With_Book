import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.fullscreen}>
      <Text style={styles.text}>SignInScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
export default SignInScreen;
