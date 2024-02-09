import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import IconRightButton from '../components/IconRightButton';
import {updatePost} from '../lib/posts';
import events from '../lib/events';
const ModifyScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();

  const [description, setDescription] = useState(params.description);

  const onSubmit = useCallback(async () => {
    await updatePost({
      id: params.id,
      description,
    });
    events.emit('updatePost', {
      postId: params.id,
      description,
    });
    navigation.pop();
  }, [description, navigation, params.id]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconRightButton onPress={onSubmit} name="check" />,
    });
  }, [navigation, onSubmit]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ios: 'height'})}
      style={styles.block}
      keyboardVerticalOffset={Platform.select({ios: 88})}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="이 사진에 대한  입력하세요..."
        textAlignVertical="top"
        value={description}
        onChangeText={setDescription}
      />
    </KeyboardAvoidingView>
  );
};

export default ModifyScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  input: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
    fontSize: 16,
  },
});
