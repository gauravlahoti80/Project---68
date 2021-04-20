import React from 'react';
import { StyleSheet, Text, View, Image   } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Instagram from './screens/instagram';
import Facebook from './screens/facebook';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: Facebook},
  Instagram: {screen: Instagram},
},
{
  defaultNavigationOptions : ({navigation}) => ({
    tabBarIcon : ({})=>{
      const routeName = navigation.state.routeName
      if (routeName === 'Instagram'){
        return(
          <Image
            source = {require('./assets/insta.jfif')}
            style = {{width : 40, height : 40}}/>
        )
      }
      else if (routeName === 'Facebook'){
        return(
          <Image
            source = {require('./assets/face.png')}
            style = {{width : 40, height : 40}}/>
        )
      }
    }
  })
}
);


const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
