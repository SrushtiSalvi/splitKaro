import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Avatar } from 'react-native-paper'

const styles = StyleSheet.create({
    container: {
    }
})

function OverallSharesFromOtherApps() {
    return (
        <View style={styles.container}>
            <Text style= {{fontSize: 20}}>Add Overall Shares</Text>
            <Text>from other apps</Text>
            <Avatar.Icon icon='account-plus' size={80} color="#00ffbf" backgroundColor="White" />
            <Text style={{marginTop: '-5%', fontSize:10, marginLeft: "4%"}}>Add a friend</Text>
        </View>
    )
}

export default OverallSharesFromOtherApps
