import { Alert, Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { ref, set } from 'firebase/database';
import { db } from '../config/Config';

export default function Screen1() {

    const [id, setid] = useState("")
    const [monto, setmonto] = useState("")
    const [categoria, setcategoria] = useState("")
    const [descripcion, setdescripcion] = useState("")

    
    
    //Guardar
    function guardarProducto(id: string, monto: string, categoria: string, descripcion: string) {
        
        set(ref(db, 'productos/' + id), {
            monto: monto,
            categoria: categoria,
            descripcion:descripcion
        });
        Alert.alert('Mensaje', 'Producto Almacenado')
        
        setid('')
        setmonto('')
        setcategoria('')
        setdescripcion('')
        Keyboard.dismiss(); 
      }

  return (
    <View style={styles.container}>
        <Text>Productos</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese ID'
        keyboardType='numeric'
        value={id}
        onChangeText={(texto)=> setid(texto)}
      />
      <TextInput
        style={styles.input}
        placeholder='Ingrese monto'
        value={monto}
        onChangeText={(texto)=> setmonto(texto)}
      />
      <TextInput
        style={styles.input}
        placeholder='Categoría'
        value={categoria}
        onChangeText={(texto)=> setcategoria(texto)}
      />
      <TextInput
        style={styles.input}
        placeholder='Descripción'
        value={descripcion}
        onChangeText={(texto)=> setdescripcion(texto)}
      />
      <TouchableOpacity 
        style={styles.btn}
        onPress={()=> guardarProducto(id, monto, categoria, descripcion)}
        >
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor:'#fff'
    },

    input:{
        backgroundColor:'whitesmoke',
        height: 40,
        width:'80%',
        margin: 10,
        fontSize:15,
        paddingHorizontal:10
    },

    btn:{
        width:100,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10,
        borderRadius:5,
        backgroundColor:"green",
        marginTop:20
    }
})