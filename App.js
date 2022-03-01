import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Header from "./scr/components/Header";
import AlbumList from "./scr/components/AlbumList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <AlbumList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black",
  },
});

export default App;
