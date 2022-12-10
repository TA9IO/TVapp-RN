import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TouchableNativeFeedback,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";
import WatchScreen from "./WatchScreen";

const windowWidth = Dimensions.get("window").width;

const Servers = () => {
  const navigation = useNavigation();
  const [server, setServer] = useState([
    { serverName: "SERVER", key: "1" },
    { serverName: "SERVER", key: "2" },
    { serverName: "SERVER", key: "3" },
    { serverName: "SERVER", key: "5" },
    { serverName: "SERVER", key: "6" },
    { serverName: "SERVER", key: "7" },
    { serverName: "SERVER", key: "8" },
    { serverName: "SERVER", key: "9" },
    { serverName: "SERVER", key: "10" },
    { serverName: "SERVER", key: "11" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={server}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate(WatchScreen);
            }}
            style={styles.server}
            routeLink={item.routeLink}>
            <Text style={styles.text}>{`${item.serverName} ${item.key}`}</Text>
            <AntDesign
              style={styles.icon}
              name='rightcircle'
              size={24}
              color='white'
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Servers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#170922",
    alignItems: "center",
    justifyContent: "center",
  },

  server: {
    backgroundColor: "#6c2e9cc9",
    padding: 15,
    margin: 10,
    width: windowWidth - 50,
    borderEndWidth: 1,
    borderColor: "#FBCEB1",
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },

  icon: {},
});
