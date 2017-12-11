import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import Camera from 'react-native-camera'
import Config from 'react-native-config'
import RNFetchBlob from 'react-native-fetch-blob'
import firebase from 'firebase'
import CloseCameraIcon from '../components/CloseCameraIcon'

const fs = RNFetchBlob.fs
const Blob = RNFetchBlob.polyfill.Blob

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob


class CameraScreen extends Component<{}> {
  static navigationOptions = {
    drawerLockMode: 'locked-closed'
  }

  state = {
    imagePath: ''
  }

  componentDidMount() {
    const config = {
      apiKey: Config.API_KEY,
      authDomain: Config.AUTH_DOMAIN,
      databaseURL: Config.DB_URL,
      projectId: Config.PROJECT_ID,
      storageBucket: Config.STORAGE_BUCKET,
      messagingSenderId: Config.MESSAGING_SENDER_ID
    }

    firebase.initializeApp(config) 

  }

  uploadToFirebaseStorage(file) {
    let rnfbURI = RNFetchBlob.wrap(file)

    let imageName = file.split('storage/emulated/0/DCIM/')[1]

    Blob
      .build(rnfbURI, { type : 'image/jpg;'})
      .then((blob) => {
        firebase.storage()
          .ref(imageName)
          .put(blob, { contentType : 'image/jpg' })
          .then((snapshot) => {
            blob.close()
          })
      })
  }

  takePicture() {
    const self = this
    const options = {}
    this.camera.capture({ metadata: options })
      .then((data) => {
        this.uploadToFirebaseStorage(data.path.slice(5))  

        this.setState({
          imagePath: data.path
        })

      })
      .catch(err => console.error(err))
  }

  renderImageTaken() {
    if (this.state.imagePath) {
      return <Image style={styles.thumbNail} source={{ uri: this.state.imagePath }} />
    } else {
      return
    }
  }

  render() {
    const self = this
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <CloseCameraIcon onPress={() => self.props.navigation.navigate('Home')} />
          <Text style={styles.capture} onPress={this.takePicture.bind(this)} />
          {self.renderImageTaken()}
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