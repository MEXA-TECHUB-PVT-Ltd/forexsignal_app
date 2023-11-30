import { StyleSheet, Text, View, StatusBar  } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview';

export default function WebViews({navigation,route}) {
  return (
    <View style={{flex:1}}>
       <StatusBar barStyle="dark-content"  backgroundColor="transparent" />
      <WebView source={{uri: 'https://infinite.red'}} style={{flex: 1}} />
    </View>
  )
}

const styles = StyleSheet.create({})