import React, { useEffect, useState } from 'react'
import { View, Text, AsyncStorage, ScrollView } from 'react-native'
import InputForm from './InputForm'
import { TextInput } from 'react-native-paper';
import AddButton from './AddButton';
import { Divider } from 'react-native-paper';

function ExistingFriend({ set }) {
    
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [share, setShare] = useState(0)
    const [friendList, setFriendList] = useState([])


    useEffect(() => {
        setter()
        console.log("effect")
    },[]);
    // function clearAllData() {
    //     AsyncStorage.getAllKeys()
    //         .then(keys => AsyncStorage.multiRemove(keys))
    //         .then(() => alert('success'));
    // }
    

   

    const setter = async () => {
        const a = await AsyncStorage.getItem('list')
        setFriendList(JSON.parse(a))
        // console.log(friendList,"aa") 
    }

    const nameSetter = (name) => {
        setName(name)
    }

    async function saveFriend(str) {
        
        const friend = {
            name: name,
            share: share
        }
        //await AsyncStorage.setItem('list',JSON.stringify([{name: "abc",share: "888"}]))
        let friendList = [];
        friendList = JSON.parse(await AsyncStorage.getItem('list'))
        friendList.push(friend);
        await AsyncStorage.setItem('list', JSON.stringify(friendList));
        setter()
    }
    

    return (
        <View>
            <InputForm placeholder={'Add Friend'} title={'Friend Name'} nameSetter={nameSetter} />
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: "center"}}>
                <Text style={{ fontSize: 25 }}>Add Share</Text>
                <TextInput
                    //value={text}
                    onChangeText={text => setShare(text)}
                    style={{ width: '50%', backgroundColor: 'transparent', marginBottom: '5%' }}
                />
            </View>
            <AddButton title={'ADD EXPENSE'} set={set} saveFriend={saveFriend} />
            {/* <Text>{friendList.length}</Text> */}
            <Text style={{fontSize: 25,marginTop: "2%"}}>Friends List</Text>
            <ScrollView style={{height: '35%'}}> 
            {friendList.length > 0 ? friendList.map((friend,index) => 
            <View key={index}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',paddingTop: 5,paddingBottom: 5}}>
                <Text style={{fontSize: 18}}>{friend.name}</Text>
                <Text style={{fontSize: 18}}>{friend.share}</Text>
            </View>
            <Divider/>
            </View>
            ): <Text>No Friends Added</Text>}
            </ScrollView>  
        </View >
    )
}

export default ExistingFriend
