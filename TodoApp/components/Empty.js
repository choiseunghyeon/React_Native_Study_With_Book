import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Empty = () => {
  return (
    <View style={styels.block}>
      <Image
        source={require('../assets/images/young_and_happy.png')}
        style={styels.image}
        resizeMode="center"
      />
      <Text style={styels.description}>야호! 할일이 없습니다.</Text>
    </View>
  );
};

const styels = StyleSheet.create({
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});
export default Empty;
