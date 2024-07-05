import { ImageBackground, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function BienvenidaScreen({navigation}:any) {
  return (
    
    <ImageBackground 
      source={{ uri:"https://i.pinimg.com/736x/ab/2c/23/ab2c236987dc8f9d32461c307bbfd913.jpg" }}
      style={styles.container}
    >
        <Text style={styles.title}>Nicholas Barrera</Text>
        <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('BottomTab')}>
            <Text>Ingresar</Text>
        </TouchableOpacity>
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },

    title:{
        fontSize:30,
        color:'white',
        marginTop:100
    },
    btn:{
        width:100,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10,
        borderRadius:5,
        backgroundColor:"#B0A999",
        marginTop:550
    }
})