import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import PostCard from '../components/PostCard';
import events from '../lib/events';

const PostScreen = () => {
  const route = useRoute();
  const {post} = route.params;
  const navigation = useNavigation();
  useEffect(() => {
    const handler = ({description}) => {
      navigation.setParams({post: {...post, description}});
    };
    events.addListener('updatePost', handler);
    return () => {
      events.removeListener('updatePost', handler);
    };
  }, [post, navigation]);
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <PostCard
        user={post.user}
        photoURL={post.photoURL}
        description={post.description}
        createdAt={post.createdAt}
        id={post.id}
      />
    </ScrollView>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  block: {fex: 1},
  contentContainer: {
    paddingBottom: 40,
  },
});
