import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import CameraButton from '../components/CameraButton'
import Welcome from '../components/Welcome'
import logo from '../assets/images/optile.png'

class HomeScreen extends Component<{}> {
  static navigationOptions = {
    drawerLockMode: 'locked-closed'
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Welcome /> 
        <CameraButton onPress={() => this.props.navigation.navigate('Camera')} />  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    margin: 16
  }
})

export default HomeScreen