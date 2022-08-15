import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Video } from "expo-av";
import {
  Entypo,
  AntDesign,
  FontAwesome,
  Ionicons,
  Fontisto,
} from "@expo/vector-icons";

const Post = (props) => {
  const [paused, setPaused] = useState(false);
  const [isLikes, setIsLikes] = useState(false)
  const [post, setPost] =useState(props.post)


const onLikedPress = () => {
  setIsLikes(!isLikes)
  const count = isLikes ? -1 : 1
  setPost({
    ...post,
    likes: post.likes + count
  } )
}




  const onPress = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress} style={styles.videoContainer}>
        <Video
          style={styles.video}
          source={post.videoUri}
          isLooping={true}
          resizeMode={"cover"}
          shouldPlay={paused}
        />
      </TouchableWithoutFeedback>

      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <Image
            style={styles.profile}
            source={post.user.imageUri}
          />

          <View style={styles.icons}>
            <TouchableOpacity onPress={onLikedPress}>
              <AntDesign name="heart" size={33} color={isLikes ? 'red' : '#fff'} />
            </TouchableOpacity>
            <Text style={styles.stat}>{post.likes}</Text>
          </View>

          <View style={styles.icons}>
            <FontAwesome name="commenting" size={33} color={"white"} />
            <Text style={styles.stat}>{post.comments}</Text>
          </View>

          <View style={styles.icons}>
            <Ionicons name="ios-bookmark" size={33} color={"white"} />
            <Text style={styles.stat}>{post.bookmark}</Text>
          </View>

          <View style={styles.icons}>
            <Fontisto name="share-a" size={29} color={"white"} />
            <Text style={styles.stat}>{post.shares}</Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.handle}>@{post.user.username}</Text>
          <Text style={styles.description}>{post.description}</Text>

          <View style={styles.song}>
            <View style={styles.icontitle}>
              <Entypo name="beamed-note" size={24} color={"white"} />
              <Text style={styles.songName}>{post.songName}</Text>
            </View>
            <View style={styles.songImageContainer}>
              <Image
                style={styles.songImage}
                source={post.songImage}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
