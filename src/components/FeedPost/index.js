import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import data from './data'
import Post from "../Post";

const FeedPost = () => {
  return (
    <View>
        <FlatList 
          data={data}
          renderItem={({item}) =>
          <Post post={item} />
        }
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height-43}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        />
    </View>
  );
};

export default FeedPost;
