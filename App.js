import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native'
import logo from './src/assets/images/optile.png'
import button from './src/assets/images/cam.png'

// base color: #299928

export default class App extends Component<{}> {
  onPressCameraButton() {
    alert('adasda')
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} />
        <Text style={styles.welcome}>
          Welcome to Optile's menu app!
        </Text>    
        <TouchableHighlight
          style={styles.camera}
          onPress={this.onPressCameraButton}>
          <View style={styles.cameraButton}>
            <Image                       
              source={button}
            />
          </View>
        </TouchableHighlight>    
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  camera: {
    position: 'absolute',
    bottom: 15,
    borderRadius: 9999
  },
  cameraButton: {
    width: 56,
    height: 56,
    backgroundColor: '#299928',
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
