import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native'
import CameraButton from './src/components/CameraButton'
import Welcome from './src/components/Welcome'
import logo from './src/assets/images/optile.png'

export default class App extends Component<{}> {
  onPressCameraButton() {
    alert('adasda')
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Welcome /> 
        <CameraButton onPress={this.onPressCameraButton} />  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    margin: 16
  }
})