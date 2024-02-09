import {
  View,
  Text,
  useWindowDimensions,
  Image,
  TextInput,
  StyleSheet,
  Animated,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import IconRightButton from '../components/IconRightButton';
import {useUserContext} from '../contexts/UserContext';
import storage from '@react-native-firebase/storage';
import {v4 as uuid} from 'uuid';
import {createPost} from '../lib/posts';
import events from '../lib/events';
const UploadScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {res} = route.params ?? {};
  const [description, setDescription] = useState('');

  const {width} = useWindowDimensions();
  const animation = useRef(new Animated.Value(width)).current;

  const {user} = useUserContext();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const onSubmit = useCallback(async () => {
    navigation.pop();

    const asset = res.assets[0];
    const extension = asset.fileName.split('.').pop();
    const reference = storage().ref(`/photo/${user.id}/${uuid()}.${extension}`);

    console.log('submit ', asset, extension, reference);
    if (Platform.OS === 'android') {
      await reference.putString(asset.base64, 'base64', {
        contentType: asset.type,
      });
    } else {
      await reference.putFile(asset.uri);
    }

    const photoURL = await reference.getDownloadURL();

    await createPost({description, photoURL, user});

    events.emit('refresh');
  }, [res, user, description, navigation]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconRightButton onPress={onSubmit} name="send" />,
    });
  }, [navigation, onSubmit]);
  useEffect(() => {
    const didShow = Keyboard.addListener('keyboardDidShow', () =>
      setIsKeyboardOpen(true),
    );
    const didHide = Keyboard.addListener('keyboardDidHide', () =>
      setIsKeyboardOpen(false),
    );

    return () => {
      didShow.remove();
      didHide.remove();
    };
  }, []);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isKeyboardOpen ? 0 : width,
      useNativeDriver: false,
      duration: 150,
      delay: 100,
    }).start();
  }, [isKeyboardOpen, width, animation]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ios: 'height'})}
      style={styles.block}
      keyboardVerticalOffset={Platform.select({ios: 180})}>
      <Animated.Image
        source={{uri: res.assets[0]?.uri}}
        // 1:1 비율 설정
        style={[styles.image, {height: animation}]}
        resizeMode="cover"
      />
      <TextInput
        style={styles.input}
        multiline
        placeholder="이 사진에 대한 설명을 입력하세요..."
        textAlignVertical="top"
        value={description}
        onChangeText={setDescription}
      />
    </KeyboardAvoidingView>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  image: {width: '100%'},
  input: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
    fontSize: 16,
  },
});
