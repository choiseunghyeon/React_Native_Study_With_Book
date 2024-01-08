import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import LogContext from '../contexts/LogContext';
import FloatingWriteButton from '../components/FloatingWriteButton';

const FeedsScreen = () => {
  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default FeedsScreen;
