import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Screens/Home";
import OnBoarding from "./Screens/OnBoarding";
import TodayGames from "./Screens/TodayGames";
import Servers from "./Screens/Servers";
import SportNews from './Screens/SportNews'
import WatchScreen from "./Screens/WatchScreen";

const Stack = createNativeStackNavigator();
export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='OnBoarding'
        screenOptions={{
          headerStyle: {
            backgroundColor: "#b91205",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
          headerTintColor: "#fff",
        }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen
          name='OnBoarding'
          component={OnBoarding}
          options={({ navigation }) => ({
            title: "YassineTV",
          })}
        />

        <Stack.Screen
          name='TodayGames'
          component={TodayGames}
          options={({ navigation }) => ({
            title: "أخبار الرياضة",
          })}
        />

        <Stack.Screen
          name='Servers'
          component={Servers}
          options={({ navigation }) => ({
            title: "Servers",
            headerStyle: {
            backgroundColor: "#170922",
          },
          })}
        />
        <Stack.Screen
          name='SportNews'
          component={SportNews}
          options={({ navigation }) => ({
            title: "Servers",
            headerStyle: {
            backgroundColor: "#170922",
          },
          })}
        />
        <Stack.Screen
          name='WatchScreen'
          component={WatchScreen}
          options={({ navigation }) => ({
            title: "شاهد",
            headerStyle: {
            backgroundColor: "#170922",
          },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// return (
//   <NavigationContainer>
//     <Stack.Navigator initialRouteName='OnBoarding'>
//       <Stack.Screen name='Home' component={Home} />
//       <Stack.Screen name='OnBoarding' component={OnBoarding} options={{ title: 'YassineTV' }} />
//     </Stack.Navigator>
//   </NavigationContainer>
// );

// export default function App() {
//   const [isFirst, setIsFirst] = React.useState(null);

//   useEffect(() => {
//     AsyncStorage.getItem("alreadyLaunched").then((value) => {
//       if (value == null) {
//         AsyncStorage.setItem("alreadyLaunched", "true");
//         setIsFirst(true);
//       } else {
//         setIsFirst(false);
//       }
//     });
//   }, []);

//   if (isFirst === null) {
//     return null;
//   } else if (isFirst === true) {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName='OnBoarding'>
//           <Stack.Screen name='Home' component={Home} />
//           <Stack.Screen name='OnBoarding' component={OnBoarding} options={{ title: 'YassineTV' }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   } else {

//     return <Home></Home>

//   }

// }
