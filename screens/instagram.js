import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import * as Permissions from 'expo-permissions';

export default class Instagram extends React.Component {
    render(){
      return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Instagram</Text>
        </View>
      )
    }
  }