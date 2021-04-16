import React from 'react'
import { StyleSheet, Image, ScrollView, Text, View } from 'react-native'
export default function Output({data}) {
    return (
        <ScrollView style={styles.container}>
        {data && data.length !=0 ?
        data.map((el, index)=>(
            <View key={index} style ={styles.card}>
                <Image 
                style={{width:350, height:200, marginTop: 20,}}
                source = {{uri:el?.images.original.url}}/>
                <Text style={{textAlign:'center', fontSize:15, fontWeight:'bold', color:'white' }}>{el.title}</Text>
            </View>
        ))
        :<Text style={{fontWeight:'bold', fontSize:30, textAlign:'center', fontFamily: "Cochin", color:'white', marginTop:200,}}>Empty</Text>
        }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginTop:10,
    },
    card: {
        marginTop:'5%',
    }
})