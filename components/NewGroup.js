import React from 'react'
import {View, Text} from 'react-native'
import { Divider } from 'react-native-paper';

function NewGroup() {
    return (
        <View>
            <Text style={{fontSize: 25, marginTop: "5%", color: "#0080ff",marginBottom: "5%"}}>Groups</Text>
            <Divider style={{borderBottomWidth:1, borderColor: 'grey'}}/>
            <View style={{flexDirection: 'row', marginTop: "5%",marginBottom: "5%",justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18}}>College Group</Text>
            <Text style={{fontSize: 18}}>90.5</Text>
            </View>
            <Divider style={{borderBottomWidth:1, borderColor: 'grey'}}/>
            <View style={{flexDirection: 'row', marginTop: "5%",marginBottom: "5%",justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18}}>Class Group</Text>
            <Text style={{fontSize: 18}}>105.8</Text>
            </View>

        </View>
    )
}

export default NewGroup
