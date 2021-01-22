import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import  {createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from "./screens/HomeScreen";
export default function App() {
  return (
    <View style={styles.container}>
          <AppContainer></AppContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

 var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
 
});
 const AppContainer = createAppContainer(AppNavigator);