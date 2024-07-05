import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

export default function Screen4() {
    const API_VIDEO_JUEGO= "https://jritsqmet.github.io/web-api/video_juegos.json"
    const [data, setdata] = useState([])

    useEffect(() => {
      fetch(API_VIDEO_JUEGO)
      .then(response => response.json())
      .then(datos=> setdata(datos))
      console.log(data);      
    }, [])

    

    type Juegos ={
        titulo:string,
        plataforma: string,
        desarrollador: string,
        precio: number,
        descripcion: string,
        imagen: string
    }
  return (
    <View>
        <Text>API VIDEO JUEGOS</Text>
        <FlatList
            data={data}
            renderItem={({item}:{item:Juegos})=>
                <Text>{item.titulo}</Text>
                <Text>{item.plataforma}</Text>
                <Text>{item.desarrollador}</Text>
                <Text>$ {item.precio}</Text>
                <Text>{item.descripcion}</Text>
                <Image
                 source={{uri:item.image}}
                />
                
        }
        />
    </View>
  )
}

const styles = StyleSheet.create({})