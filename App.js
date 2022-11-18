import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CustomModal from "./componentes/CustomModal";
import CustomIcon from "./CustomIcon.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HyperLink_ from "./componentes/HyperLink_"
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator InitialRouteName="CustomIcon">
          <Stack.Screen name="CustomIcon" component={CustomIcon}
          ></Stack.Screen>
          <Stack.Screen name ="HyperLink_" component={HyperLink_}>
          </Stack.Screen>
        </Stack.Navigator>
        
      </NavigationContainer>
    </>
  );
};

export default App;
