import {
  View,
  Text,
  Platform,
  Pressable,
  StyleSheet,
  ActionSheetIOS,
} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UploadModeModal from './UploadModeModal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import ActionSheetModal from './ActionSheetModal';

const TABBAR_HEIGHT = 49;
const IMAGE_PICKER_OPTION = {
  mediaType: 'photo',
  maxWidth: 768,
  maxHeight: 768,
  includeBase64: Platform.OS === 'android',
};

const CameraButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const bottom = Platform.select({
    android: TABBAR_HEIGHT / 2,
    ios: TABBAR_HEIGHT / 2 + insets.bottom - 4,
  });

  const onPickImage = res => {
    if (res.didCancel || !res) {
      return;
    }
    navigation.push('Upload', {res});
    console.log(res);
  };

  const onLaunchCamera = () => {
    launchCamera(IMAGE_PICKER_OPTION, onPickImage);
  };

  const onLaunchImageLibrary = () => {
    launchImageLibrary(IMAGE_PICKER_OPTION, onPickImage);
  };

  const onPress = () => {
    if (Platform.OS === 'android') {
      setModalVisible(true);
      return;
    }

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['카메라로 촬영하기', '사진 선택하기', '취소'],
        cancelButtonIndex: 2,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          console.log('카메라 촬영');
          onLaunchCamera();
        } else if (buttonIndex === 1) {
          console.log('사진 선택');
          onLaunchImageLibrary();
        }
      },
    );
  };
  return (
    <>
      <View style={[styles.wrapper, {bottom}]}>
        <Pressable
          android_ripple={{color: '#ffffff'}}
          style={styles.circle}
          onPress={onPress}>
          <Icon name="camera-alt" color="white" size={24} />
        </Pressable>
        <ActionSheetModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          actions={[
            {
              icon: 'camera-alt',
              text: '카메라로 촬영하기',
              onPress: onLaunchCamera,
            },
            {
              icon: 'photo',
              text: '사진 선택하기',
              onPress: onLaunchImageLibrary,
            },
          ]}
        />
      </View>
    </>
  );
};

export default CameraButton;

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 5,
    borderRadius: 27,
    height: 54,
    width: 54,
    position: 'absolute',
    left: '50%',
    transform: [{translateX: -27}],
    ...Platform.select({
      ios: {
        shadowColor: '#4d4d4d',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
        overflow: 'hidden',
      },
    }),
  },
  circle: {
    backgroundColor: '#6200ee',
    borderRadius: 27,
    height: 54,
    width: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
