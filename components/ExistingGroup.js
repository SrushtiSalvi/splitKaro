import React, {useState} from 'react'
import { View, Text, AsyncStorage } from 'react-native'

import InputForm from './InputForm'
import OverallSharesFromOtherApps from './OverallSharesFromOtherApps'
import AddButton from './AddButton'

function ExistingGroup({set}) {

    const [groupName, setGroupName] = useState()
    const [groupMembers, setGroupMembers] = useState([])
    const [groupList, setGroupList] = useState([])
    const [modalVisible, setModalVisible] = useState(false);



    const setter = async () => {
        const a = await AsyncStorage.getItem('groupList')
        setGroupList(JSON.parse(a))
    }
    
    const friendSetter = (contact) => {
        const existingFriends = groupMembers;
        existingFriends.push(contact)
        setGroupMembers(existingFriends)
        console.log(groupMembers)
        setModalVisible(false)
    }


    const nameSetter = (name) => {
        setGroupName(name)
    }

    async function createGroup () {
        const group = {
            groupName: groupName,
            members: groupMembers
        }
         let groupList = []
         groupList = await AsyncStorage.getItem('groupList')
         groupList = JSON.parse(groupList)
         groupList.push([group])
         console.log("GroupList:",groupList,"  ",group)
         await AsyncStorage.setItem('groupList', JSON.stringify(groupList));
         setter()
    }
   
    return (
        <View>
            <InputForm placeholder={'Enter Group Name'} title={'Group Name'} nameSetter={nameSetter}/>
            <OverallSharesFromOtherApps friendSetter={friendSetter} groupMembers={groupMembers} setModalVisible={setModalVisible} modalVisible={modalVisible}/>
            <AddButton title={'CREATE GROUP'} set={set} createGroup={createGroup} />
        </View>
    )
}

export default ExistingGroup
