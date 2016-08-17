import React from 'react'
import { AppRegistry } from 'react-native'
import App from './src/components/App'

function Root () {
  return (
    <App />
  )
}

AppRegistry.registerComponent('WLPN', () => Root)
