import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

const SportNews = () => {
  return (
    <WebView 
      style={styles.container}
      source={{ uri: 'https://www.beinsports.com/ar/' }}
    />
  );
};

export default SportNews;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#170922",
    alignItems: "center",
    justifyContent: "center",
  },

});
