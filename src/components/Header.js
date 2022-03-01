import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>G.E.M 鄧紫棋 精選歌曲</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    //backgroundColor: "#F8F8F8",
    backgroundColor: "#46C2F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 4
  },
  textStyle: {
    fontSize: 30,
    
    color: 'black'
  },
});

export default Header;
