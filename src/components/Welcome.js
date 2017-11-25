import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Welcome extends Component<{}> {
  render() {
    return (
      <View>
       	<Text style={styles.welcome}>
          Welcome to Optile's menu app
        </Text> 
        <Text style={styles.welcomeDesciption}>
          Here you can upload the menu and share with your colleagues in Slack
        </Text>   
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 24,
  },
  welcomeDesciption: {
    fontSize: 16,
    textAlign: 'center',
    margin: 16
  }
})