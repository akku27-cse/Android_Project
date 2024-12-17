import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import Home from './src/screens/Home/Home';
// import InitialScreen from './src/screens/InitialScreen/InitialScreen';
import LogIn from './src/screens/LogIn/LogIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
import InitialScreen from './src/screens/InitialScreen/InitialScreen';
import Register from './src/screens/Register/Register';
import AddTask from './src/screens/Task/AddTask';
import Task from './src/screens/Task/Task';
// import Navigation from './src/Navigation/Navigation';

// import { NavigationContainer } from '@react-navigation/native';

// const Stack=createStackNavigator();

const Stack=createNativeStackNavigator();
const App = () => {
  return (
  <>
<NavigationContainer>
 <Stack.Navigator initialRouteName='InitialScreen' screenOptions={{headerShown:false}}>
  <Stack.Screen name='InitialScreen' component={InitialScreen}/>
  <Stack.Screen name='MainNavigation' component={Navigation}/>
  <Stack.Screen name='Login' component={LogIn}/>
  <Stack.Screen name='Register' component={Register}/>
  <Stack.Screen name='AddTask' component={AddTask}/>
  <Stack.Screen name='Task' component={Task}/>
 </Stack.Navigator>
</NavigationContainer>

  </>
  );
};

export default App;

const styles = StyleSheet.create({


  
});