import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";






const OnBoarding = ({ navigation }) => {
  return (
    <Onboarding
      bottomBarHeight={80}
      transitionAnimationDuration={0}
      subTitleStyles={{fontSize: 20}}
      onSkip={() => {navigation.replace('Home')}}
      onDone={() => {navigation.navigate('Home')}}
      pages={[
        {
          backgroundColor: "#b91205",
          image: (
            <Image
              style={styles.yassineLogo}
              source={require("../assets/Yassine.png")}
              
            />
          ),
          // title: "Onboarding",
          subtitle: "مرحبا بك في تطبيق Yacine TV App Guide",
        },
        {
          backgroundColor: "#b91205",
          image: (
            <Image
              style={styles.yassineLogo}
              source={require("../assets/Yassine.png")}
            />
          ),
          // title: "The Title",
          subtitle: "!! افضل تطبيق لمشاهدة المباريات مجانا مع بث مباشر لأبرز المباريات العالمية",
        },
        {
          backgroundColor: "#b91205",
          image: (
            <Image
              style={styles.yassineLogo}
              source={require("../assets/Yassine.png")}
            />
          ),
          // title: "Triangle",
          subtitle: "ابدأ الان وشاهد فريقك المفضل...!",
        },
      ]}
    />
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  OnBoarding: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  yassineLogo: {
    width: 200,
    height: 200,
  },
});
