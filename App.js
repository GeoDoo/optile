import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import CameraScreen from './src/screens/CameraScreen'

const App = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Camera: {
    screen: CameraScreen,
  },
})

export default App