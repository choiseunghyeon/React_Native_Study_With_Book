import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import LogContext from '../contexts/LogContext';

const FeedsScreen = () => {
  const value = useContext(LogContext);
  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
};

export default FeedsScreen;
