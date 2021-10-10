import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: '5%',
        justifyContent: 'space-evenly'
    },
    icon: {
        backgroundColor: "white",
        alignSelf: 'center'
    },
    text: {
        width: "70%",
        marginRight: "2%",
        textAlign: 'center',
        alignSelf: 'center'
    }
})

function ImportBalancesButtons(props) {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.set('anExistingGroup')}>
                <Avatar.Icon size={70} icon="account-group" style={styles.icon} color="#0080ff"/>
                <Text style={styles.text}>An Existing Group</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.set('anExistingFriend')}>
                <Avatar.Icon size={70} icon="account-multiple-check" color="#0080ff" style={styles.icon} />
                <Text style={styles.text}>An Existing Friend</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.set('newGroup')}>
                <Avatar.Icon size={70} icon="account-group" color="#0080ff" style={styles.icon} />
                <Text style={styles.text}>Create A new group</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ImportBalancesButtons
