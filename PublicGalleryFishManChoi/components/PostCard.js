import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import React, {useMemo} from 'react';
import Avatar from './Avatar';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {useUserContext} from '../contexts/UserContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import usePostActions from '../hooks/usePostActions';
import ActionSheetModal from './ActionSheetModal';

const PostCard = ({user, photoURL, description, createdAt, id}) => {
  const routeNames = useNavigationState(state => state.routeNames);
  const {user: me} = useUserContext();
  const {actions, isSelecting, onClose, onPressMore} = usePostActions({
    id,
    description,
  });
  const isMyPost = me.id === user.id;
  const date = useMemo(
    () => (createdAt ? new Date(createdAt._seconds * 1000) : new Date()),
    [createdAt],
  );
  const navigation = useNavigation();
  const onOpenProfile = () => {
    const isNavigatedFromMyProfile = routeNames.find(
      routeName => routeName === 'MyProfile',
    );
    if (isNavigatedFromMyProfile) {
      navigation.navigate('MyProfile');
    } else {
      navigation.navigate('Profile', {
        userId: user.id,
        displayName: user.displayName,
      });
    }
  };

  return (
    <>
      <View style={styles.block}>
        <View style={[styles.head, styles.paddingBlock]}>
          <Pressable style={styles.profile} onPress={onOpenProfile}>
            <Avatar source={user.photoURL && {uri: user.photoURL}} />
            <Text style={styles.displayName}>{user.displayName}</Text>
          </Pressable>
          {isMyPost && (
            <Pressable
              hitSlop={{top: 8, right: 8, left: 8, bottom: 8}}
              onPress={onPressMore}>
              <Icon name="more-vert" size={20} />
            </Pressable>
          )}
        </View>
        <Image
          source={{uri: photoURL}}
          style={styles.image}
          resizeMethod="resize"
          resizeMode="cover"
        />
        <View style={styles.paddingBlock}>
          <Text style={styles.description}>{description}</Text>
          <Text date={date} style={styles.date}>
            {date.toLocaleString()}
          </Text>
        </View>
      </View>
      <ActionSheetModal
        visible={isSelecting}
        actions={actions}
        onClose={onClose}
      />
    </>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  block: {
    paddingVertical: 16,
  },
  paddingBlock: {
    paddingHorizontal: 16,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  displayName: {
    lineHeight: 16,
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  image: {
    backgroundColor: '#bdbdbd',
    width: '100%',
    aspectRatio: 1,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  date: {
    color: '#757575',
    fontSize: 12,
    lineHeight: 18,
  },
});
