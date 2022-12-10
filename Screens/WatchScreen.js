import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Button
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const WatchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.video}>
        <TouchableOpacity style={styles.icon}>
          <AntDesign name='caretright' size={50} color='white' />
        </TouchableOpacity>
      </View>
      {/* /////////////////////////////////////////////// */}

      <View style={styles.btn}>

        <Button title="تحديث" />

      </View>

      {/* /////////////////////////////////////////////// */}
      <View style={styles.container}>

      <Text style={styles.text}>تنبيه!!!</Text>
      <Text style={styles.text2}>في حال عدم انطلاق البث او وجود مشاكل الرجاء الضغط على زر التحديث</Text>
      <Text style={styles.text2}>في حال  استمرار المشكلة الرجاء تجربة سرفر أخر او تغيير الجودة</Text>

      </View>
    </View>
  );
};

export default WatchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#170922",
  },
  video: {
    height: windowHeight - windowHeight / 1.5,
    width: windowWidth,
    backgroundColor: "#000",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {

      color: '#fff',
      textAlign:'center',
      margin: 20,
      backgroundColor: 'red'

  },
  text2: {

      color: '#fff',
      textAlign:'center',
      margin: 20,
      backgroundColor: 'red'

  }
});
