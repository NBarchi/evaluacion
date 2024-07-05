import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Informacion from '../components/Informacion'
import { onValue, ref } from 'firebase/database'
import { db } from '../config/Config'







export default function Screen2() {

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

    type Producto ={
        key: string
    }

  return (
    <View>
      <FlatList
       data={lista}
       renderItem={({item}:{item:Producto})=>
           <View style={{borderColor:'whitesmoke', borderWidth:3, padding:10, margin:10}}>
             <Informacion data={item}/>
             <View style={{flexDirection:'row', gap:10}}>
               
             </View>
           </View>
         }/>
    </View>
  )
}

const styles = StyleSheet.create({})