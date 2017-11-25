import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import CameraIcon from './CameraIcon'

const CameraButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.camera}
      onPress={props.onPress}>
      <View style={styles.cameraButton}>
        <CameraIcon />
      </View>
    </TouchableOpacity>    
  )
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 24
  },
  cameraButton: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default CameraButton