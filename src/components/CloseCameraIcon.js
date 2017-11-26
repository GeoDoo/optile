import React, { Component } from 'react'
import {
	StyleSheet,
	TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const CloseCameraIcon = (props) => {
  return (
  	<TouchableOpacity onPress={props.onPress} style={styles.close} >
   		<Icon name="ios-close" size={64} color="#fff" />
   	</TouchableOpacity>
  )
}

const styles = StyleSheet.create({
	close: {
		position: 'absolute',
		zIndex: 100,
		top: 8,
		right: 24
	}
})

export default CloseCameraIcon