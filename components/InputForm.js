import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-paper';

function InputForm({placeholder,title}) {

    const [text, setText] = useState('')

    const styles = StyleSheet.create({
        inputform: {
            height: 40, 
            fontSize: 15,
        },
        container: {
            height: "20%",
            marginTop: "10%",
        }
    })

    return (
       <View style={styles.container}>
           <Text style={{fontSize: 15}}>{title}</Text>
            <TextInput
            placeholder={placeholder}
            value={text}
            mode='outlined'
            outlineColor='#0080ff'
            onChangeText={text => setText(text)}
            style={styles.inputform} />
       </View>
    )
}

export default InputForm
