import {View, Text, StyleSheet, Platform, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const FloatingWriteButton = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Write');
  };
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.button,
          Platform.select({ios: {opacity: pressed ? 0.6 : 1}}),
        ]}
        android_ripple={{color: 'white'}}>
        <Icon name="add" size={24} styles={styles.icon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    // iOS 전용 그림자 설정
    shadowColor: '#4d4d4d',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    //안드로이드 전용 그림자 설정
    elevation: 5,
    /*r
            안드로이드에서 물결 효과가 영역 밖으로 나가지 않도록 설정
            iOS에서는 overflow가 hidden일 경우 그림자가 보여지지 않음
        */
    overflow: Platform.select({android: 'hidden'}),
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
});
export default FloatingWriteButton;
