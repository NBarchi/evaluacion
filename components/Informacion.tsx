import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Informacion(props:any) {

    console.log(props.data);
    
  return (
    <View>
      <Text>{props.data.key}</Text>
      <Text>{props.data.categoria}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})