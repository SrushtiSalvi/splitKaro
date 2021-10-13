import React, {useState} from 'react'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native'
import { Avatar } from 'react-native-paper'

import ImportBalancesButtons from '../components/ImportBalancesButtons'
import ExistingFriend from '../components/ExistingFriend'
import ExistingGroup from '../components/ExistingGroup'
import NewGroup from '../components/NewGroup'
import Account from './Account'
import { TouchableOpacity } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width:"90%",
        alignSelf:'center'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '60%'
    }

})

function ImportBalances({navigation}) {
    const [type, setType] = useState('anExistingGroup');
    const set = (currentState) => {
      setType(currentState);
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', marginTop: '12%'}}>
            <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
                <Avatar.Icon icon='arrow-left-drop-circle-outline' size={40} color='black' style={{backgroundColor: 'white', marginRight: '5%'}}/>
            </TouchableOpacity>
            <Text style={styles.header}>Import Balances for</Text>
            </View>
            <ImportBalancesButtons set={set} />
            {type === "anExistingGroup"? <ExistingGroup set={set}/>
            :
            type === "anExistingFriend"? <ExistingFriend set={set}/>
            :
            type === "newGroup"? <NewGroup />
            :
            null
            }
        </View>
    )
}

export default ImportBalances
