import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import { Image } from "react-native";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/60/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/home.png",
  },
  {
    name: "Search",
    active:
      "https://img.icons8.com/fluency-systems-filled/60/ffffff/search.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/search.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/FFFFFF/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/50/FFFFFF/instagram-reel.png",
  },
  {
    name: "Shop",
    active: "https://img.icons8.com/ios-filled/50/FFFFFF/shopping-bag.png",
    inactive: "https://img.icons8.com/ios/50/FFFFFF/shopping-bag--v1.png",
  },
  {
    name: "Profile",
    active:
      "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg?w=2000",
    inactive:
      "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg?w=2000",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => {
    return (
      <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image
          source={{
            uri: activeTab === icon.name ? icon.active : icon.inactive,
          }}
          style={[
            styles.icon,
            icon.name === "Profile" ? styles.profilePic() : null,
            activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab) : null
          ]}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    zIndex: 99900,
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: (activeTab = '') => ({
    borderRadius: 50,
    borderColor: "white",
    borderWidth: activeTab === 'Profile' ? 2 : 0,
  }),
});

export default BottomTabs;
