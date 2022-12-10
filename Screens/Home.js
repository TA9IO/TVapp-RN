import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions
} from "react-native";
import React, { useState } from "react";
import HomeComponent from "./HomeComponent";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Home = ({ navigation, route }) => {
  const [mainItem, setMainItem] = useState([
    { id: "1", name: " أخبار الرياضة", routeLink: "SportNews" },
    { id: "4", name: "مباريات اليوم", routeLink: "TodayGames" },
    { id: "2", name: "BeinSPORTS 1080", routeLink: "Servers" },
    { id: "3", name: "BeinSPORTS 720", routeLink: "Servers" },
    { id: "4", name: "BeinSPORTS 360", routeLink: "Servers" },
    { id: "4", name: "BeinSPORTS 144", routeLink: "Servers" },
  ]);

  return (
    <View style={styles.container}>
      {/* <ScrollView> */}

      <FlatList
        data={mainItem}
        renderItem={({ item }) => (
          <HomeComponent routeLink={item.routeLink}>{item.name}</HomeComponent>
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Servers")}>
        <Text style={styles.txt}>تحميل المزيد</Text>
      </TouchableOpacity>
      {/* </ScrollView> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a82f2f",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
  btn: {
    backgroundColor: "#a82f2f",
    fontSize: 20,
    width: 200,

  },
});
