import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App_to_Home" screenOptions={
        { headerTintColor: 'white', headerStyle: {backgroundColor: 'orange'}}
      }>
        <Stack.Screen component={HomeScreen} name="App_to_Home" options={{title: 'Movie Time'}} />
        <Stack.Screen component={DetailsScreen} name="Home_to_Details" options={({route}) => ({title: route.params.movie.title})} />
        <Stack.Screen component={DetailsScreen} name="Details_to_Details" options={({route}) => ({title: route.params.movie.title})} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
