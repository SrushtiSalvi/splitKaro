import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

function AddButton({title, set}) {

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0080ff',
        width: "100%",
        marginTop: "10%"
    },
    container: {
        width: "100%", 
        alignItems: 'center'
    }
})

const handleOnPress = () => {
    if(title === 'CREATE GROUP') {
        set('newGroup')
    }
}
    return (
        <View style={styles.container}>
            <Button style={styles.button} mode="contained" onPress={handleOnPress}>{title}</Button>
        </View>
    )
}

export default AddButton
