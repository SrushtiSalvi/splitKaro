import React from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import { Avatar, Divider } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        marginTop:20
    },
    buttons: {
        height:60,
        flexDirection: 'row',
        alignItems: 'center'
    }
    
})

function AccoutButtons({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("ImportBalancesScreen")}>
                <Avatar.Icon size={35} icon="cloud-upload-outline" color="blue" backgroundColor="white"/>
                <Text style={{fontSize: 18, color: 'blue'}}>Import Balances</Text>
            </TouchableOpacity>
            <Divider style={{borderBottomWidth:1, borderColor: 'grey'}} />
            <View style={styles.buttons}>
                <Avatar.Icon size={35} icon="star" color="blue" backgroundColor="White"/>
                <Text style={{fontSize: 18}}>Rate Us</Text>
            </View>
            <Divider style={{borderBottomWidth:1, borderColor: 'grey'}} />
            <View style={styles.buttons}>
                <Avatar.Icon size={35} icon="logout" color="blue" backgroundColor="White"/>
                <Text style={{fontSize: 18}}>Logout</Text>
            </View>
            <Divider style={{borderBottomWidth:1, borderColor: 'grey'}} />
            <View style={styles.buttons}>
                <Avatar.Icon size={35} icon="cloud-upload-outline" color="blue" backgroundColor="White"/>
                <Text style={{fontSize: 18, color: 'black'}}>Import Balances from other apps</Text>
            </View>
        </View>
    )
}

export default AccoutButtons
