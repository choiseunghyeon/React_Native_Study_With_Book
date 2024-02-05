import {View, Text, Pressable, Platform, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconRightButton = ({name, color = '#6200ee', onPress}) => {
  return (
    <View style={styles.block}>
      <Pressable
        style={({pressed}) => [
          styles.circle,
          Platform.select({ios: pressed && {opacity: 0.3}}),
        ]}
        onPress={onPress}
        android_ripple={{color: '#eee'}}>
        <Icon name={name} color={color} size={24} />
      </Pressable>
    </View>
  );
};

export default IconRightButton;

const styles = StyleSheet.create({
  block: {
    marginRight: -8,
    borderRadius: 24,
    overflow: 'hidden',
  },
  circle: {
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
