import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import BackgroundVideo from './BackgroundVideo'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <BackgroundVideo />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
