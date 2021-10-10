import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-paper';


function Profile() {
    return (
        <View style={{flexDirection:'row'}}>
            <View>
                <Avatar.Icon size={50} icon="account" />
            </View>
            <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 20}}>Avinash</Text>
                <Text style={{color: 'grey'}}>7589354869</Text>
                <Text style={{color: 'grey'}}>avinashmishra.bit2k1</Text>
            </View>
        </View>
    )
}

export default Profile
