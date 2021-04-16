import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default function Search({search, val, setVal}) {
    return (
        <View>
            <TextInput style = {styles.input}
                
                value = {val}
                onChangeText = {(text)=>setVal(text)}
                placeholder = 'enter name'
            />
            <TouchableOpacity style = {styles.button}
            onPress = {search}>
                <Text style={{marginLeft:30, marginTop:10, fontSize:18, fontWeight:'bold', color: 'white' }}>Click</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        height:40,
        width:300,
        marginTop: '15%',
        fontSize:20, 
        backgroundColor: `#778899`,
        borderRadius: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontFamily: "Cochin",
      
    },
    button:{
        height:40, 
        width:100,
        marginTop: 1,
        fontSize:20,
        marginLeft: 100,
        backgroundColor:`#778899`,
        borderRadius: 20,
        fontFamily: "Cochin",
        marginTop: 5,
    }
})
