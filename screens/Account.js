import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


import Profile from '../components/Profile'
import Currency from '../components/Currency'
import AccoutButtons from '../components/AccoutButtons'

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width: '100%'
    },
    header: {
        marginTop: "10%", 
        height: 30,
        textAlignVertical: 'center',
        paddingLeft: 15,
        fontSize: 20
    },
    buttons: {
        alignSelf: 'center', 
        marginTop: "25%"
    },
   
})

function Account({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Account</Text>
            <View style={styles.buttons}>
                <Profile />
                <Currency />
                <AccoutButtons navigation={navigation} />
            </View>
        </View>
    )
}

export default Account
