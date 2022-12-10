import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TouchableHighlight
} from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const HomeComponent = ({ children, routeLink}) => {
  
  const navigation = useNavigation(); 
  console.log();
  return (
    
      <TouchableOpacity
      onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate(routeLink);
        }}
        style={styles.container}
        activeOpacity={0.6}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    width: windowWidth - 30,
    margin: 20,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 24,
    // ********** ********//
  },
  text: {
    color: "#b91205",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold'
  },
});
