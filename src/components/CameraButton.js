import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native'
import button from '../assets/images/cam.png'

export default class CameraButton extends Component<{}> {
  render() {
    return (
      <TouchableHighlight
        style={styles.camera}
        onPress={this.props.onPress}>
        <View style={styles.cameraButton}>
          <Image                       
            source={button}
          />
        </View>
      </TouchableHighlight>    
    )
  }
}

const styles = StyleSheet.create({
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
