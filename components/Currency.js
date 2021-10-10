import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between', 
        marginTop: '10%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        height: 50,
        borderColor: 'grey',
        borderRadius: 15,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2

    },
    text: {
        fontSize:15,
        textAlignVertical:'center',
        marginLeft: 10
    },
    icon: {
        marginRight: 10,
        alignSelf: 'center'
    }
})

function Currency() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Default currency</Text>
            <View style={styles.icon}>
                <Avatar.Icon size={20} icon="currency-inr" />
            </View>
        </View>
    )
}

export default Currency
