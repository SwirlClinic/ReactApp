/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {ReactNativeAD, ADLoginView} from 'react-native-azure-ad'


const config = {
  client_id : '6b6ed523-ff34-4ad8-8673-9455c49fd305',
  //client_secret : 'hqtO+9zEOrJ/eQj9qxD5Po1gwWc4Re2bt+SmM8VgR7w=',
  resources : [
    'mrserg.io'
  ]
}

class RNAzureAD extends Component {
  constructor(props) {
    super(props)
    new ReactNativeAD(config)
  }

  render() {
    return (
      <View style={styles.container}>
        <ADLoginView context={ReactNativeAD.getContext(config.client_id)}
          //needLogout={true}UUUUU
          hideAfterLogin = {false}
          onSuccess={this.onLoginSuccess.bind(this)}
        />
      </View>
    )
  }

  onLoginSuccess(cred) {
    console.log(cred)
    console.log("We did it reddit!")
    return (
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      )
  }

 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('cheese', () => RNAzureAD);
