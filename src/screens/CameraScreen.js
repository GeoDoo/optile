import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import Camera from 'react-native-camera'
import CloseCameraIcon from '../components/CloseCameraIcon'

class CameraScreen extends Component<{}> {
  static navigationOptions = {
    drawerLockMode: 'locked-closed'
  }

  state = {
    imagePath: ''
  }

  takePicture() {
    const options = {}
    this.camera.capture({metadata: options})
      .then((data) => {
        // console.log(data)
        this.setState({
          imagePath: data.path
        })
      })
      .catch(err => console.error(err))
  }

  renderImageTaken() {
    if (this.state.imagePath) {
      return <Image style={styles.thumbNail} source={{uri: this.state.imagePath}} />
    } else {
      return
    }
  }

  render() {
    const that = this
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <CloseCameraIcon onPress={() => that.props.navigation.navigate('Home')} />
          <Text style={styles.capture} onPress={this.takePicture.bind(this)} />
          {that.renderImageTaken()}
        </Camera>
      </View>
    )
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
    backgroundColor: 'rgba(41, 153, 40, 0.6)',
    padding: 10,
    margin: 24,
    width: 72,
    height: 72,
    borderRadius: 9999,
    borderWidth: 5,
    borderColor: '#fff'
  },
  thumbNail: {
    width: 100,
    height: 100,
    position: 'absolute',
    zIndex: 1000,
    top: 10,
    left: 10
  }
})

export default CameraScreen