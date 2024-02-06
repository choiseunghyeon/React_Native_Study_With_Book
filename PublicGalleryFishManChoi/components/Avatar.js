import {View, Text, Image} from 'react-native';
import React from 'react';

const Avatar = ({source, size = 32, style}) => {
  return (
    <Image
      source={source ?? require('../assets/user.png')}
      resizeMode="cover"
      style={[style, {width: size, height: size, borderRadius: size / 2}]}
    />
  );
};

export default Avatar;
