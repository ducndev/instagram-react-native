import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { Divider } from "react-native-elements";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
    likedImageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/speech-bubble.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/sent.png",
  },
  {
    name: "Save",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark-ribbon.png",
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <View>
        <PostHeader post={post} />
        <PostImage post={post} />
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          <PostFooter />
          <Likes post={post} />
          <Caption post={post} />
          <CommentsSection post={post} />
          <Comments post={post}/>
        </View>
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        alignContent: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={styles.story} source={{ uri: post.profile_picture }} />
        <Text style={{ color: "white", marginLeft: 5, fontWeight: "bold" }}>
          {post.user}
        </Text>
      </View>
      <View>
        <Text style={{ color: "white", fontWeight: "bold" }}>...</Text>
      </View>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View style={{ width: "100%", height: 450 }}>
      <Image
        style={{ height: "100%", resizeMode: "cover" }}
        source={{ uri: post.imageUrl }}
      />
    </View>
  );
};

const PostFooter = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View style={styles.leftFooterIconsContainer}>
        <Icon
          imgStyle={styles.footerIcon}
          imageUrl={postFooterIcons[0].imageUrl}
        />
        <Icon
          imgStyle={styles.footerIcon}
          imageUrl={postFooterIcons[1].imageUrl}
        />
        <Icon
          imgStyle={[styles.footerIcon, styles.shareIcon]}
          imageUrl={postFooterIcons[2].imageUrl}
        />
      </View>
      <View style={{ paddingRight: 10 }}>
        <Icon
          imgStyle={styles.footerIcon}
          imageUrl={postFooterIcons[3].imageUrl}
        />
      </View>
    </View>
  );
};

const Icon = ({ imgStyle, imageUrl }) => {
  return (
    <TouchableOpacity>
      <Image style={imgStyle} source={{ uri: imageUrl }} />
    </TouchableOpacity>
  );
};

const Likes = ({ post }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 4 }}>
      <Text style={{ color: "white", fontWeight: "bold" }}>
        {post.likes.toLocaleString("en")} likes
      </Text>
    </View>
  );
};

const Caption = ({ post }) => {
  return (
    <View style={{ marginTop: 5 }}>
      <Text style={{ color: "white" }}>
        <Text style={{ fontWeight: "bold" }}>{post.user}</Text>
        <Text>
          {" "}
          {post.caption.length > 15
            ? post.caption + "...see more"
            : post.caption}
        </Text>
      </Text>
    </View>
  );
};

const CommentsSection = ({ post }) => {
  return (
    <View style={{marginTop: 5}}>
      { post.comments.length > 0 &&
        <Text style={{ color: "gray" }}>
        View {post.comments.length > 1 ? "all" : ""} {post.comments.length} {""}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
      }
    </View>
  );
};

const Comments = ({post}) => {
  return(
    <>
      {post.comments.map((comment, index) => (
        <View key={index} style={{marginTop: 5, flexDirection: 'row'}}>
          <Text style={{color: 'white'}}>
            <Text style={{fontWeight: 'bold'}}>{comment.user}</Text>
            <Text> {comment.comment}</Text>
          </Text>
        </View>
      ))}
    </>
  )
}

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },

  footerIcon: {
    width: 28,
    height: 28,
  },

  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },

  shareIcon: {
    transform: [{ rotate: "320deg" }],
    marginTop: -3,
  },
});

export default Post;
