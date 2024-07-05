import { Alert, Button, Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onValue, ref, remove, update } from 'firebase/database';
import { db } from '../config/Config';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Informacion from '../components/Informacion';

export default function Screen3() {

    const [id, setid] = useState("")
    const [monto, setmonto] = useState("")
    const [categoria, setcategoria] = useState("")
    const [descripcion, setdescripcion] = useState("")

    const [lista, setlista] = useState([])

    function leer (){
        const starCountRef = ref(db, 'productos/' );
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);

            //cambio de formaato
            const listaTemp : any = Object.keys(data).map((key)=>({
                key, ...data[key]
            }))

            //console.log(listaTemp);
            setlista(listaTemp)
            
            
        });

    }

    useEffect(() => {
        leer()

    }, [])


    /////// EDITAR ///////
    function editar(id:string){
        update(ref(db, 'productos/' + id), {
            monto: monto,
            categoria: categoria,
            descripcion:descripcion
        });
  
        setid('')
        setmonto('')
        setcategoria('')
        setdescripcion('')
        Keyboard.dismiss()
      }
  
      function editar2(item: any){
        setid(item.key)
        setmonto(item.monto)
        setcategoria(item.categoria)
        setdescripcion(item.descripcion)
      }

      function eliminar(id:string){
        Alert.alert(
          'Eliminar',
          'Seguro desea eliminar?',
          [
            {
              text: 'Cancelar',
              onPress: () => console.log('Cancel Pressed'),
            },
            {
              text: 'Aceptar', 
              onPress: () => {remove(ref(db, 'productos/' + id))}
            },
          ],
          {cancelable: false},
        );
      }

      type Producto ={
        key: string
        }
  return (

    <View style={styles.container}>
        <Text>Productos</Text>
      <TextInput
        style={styles.input}
        placeholder='ID'
        keyboardType='numeric'
        value={id}
        onChangeText={(texto)=> setid(texto)}
      />
      <TextInput
        style={styles.input}
        placeholder='Monto'
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
        <TouchableOpacity style={styles.btn} onPress={()=> editar(id)}>
            <Text>Editar</Text>
        </TouchableOpacity>
    <FlatList
        data={lista}
        renderItem={({item}:{item:Producto})=>
            <View style={{borderColor:'whitesmoke', borderWidth:3, padding:10}}>
              <Informacion data={item}/>
              <View style={{flexDirection:'row', gap:10}}>
                <Button title='Editar' color='#B0A999' onPress={()=>editar2(item)}/>
                <Button title='Eliminar' color='#B0A999' onPress={()=>eliminar(item.key)}/>
              </View>
            </View>
        }
        style={styles.lista}
      />
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
        backgroundColor:"Green",
        marginTop:20
    },

    lista:{
        marginTop: 50
    },
})