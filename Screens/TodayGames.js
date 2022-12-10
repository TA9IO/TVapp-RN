import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

const TodayGames = () => {
  return (
    <WebView 
      style={styles.container}
      source={{ uri: 'https://www.beinsports.com/ar/%D9%83%D8%B1%D8%A9-%D8%A7%D9%84%D9%82%D8%AF%D9%85/%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%B1%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D8%A7%D8%AF%D9%85%D8%A9' }}
    />
  );
};

export default TodayGames;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#170922",
    alignItems: "center",
    justifyContent: "center",
  },

});
