import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import Camera from 'react-native-camera'

class CameraScreen extends Component<{}> {
  static navigationOptions = {
    drawerLockMode: 'locked-closed'
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
            <Text style={styles.captureButton}>Lolo</Text>
          </Text>
        </Camera>
      </View>
    )
  }

  takePicture() {
    const options = {}
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 9999,
    width: 64,
    height: 64,
    padding: 10,
    margin: 40
  },
  captureButton: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    backgroundColor: '#000',
    margin: 12
  }
})

export default CameraScreen