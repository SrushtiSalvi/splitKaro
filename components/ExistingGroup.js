import React from 'react'
import { View, Text, useState } from 'react-native'
import FriendList from './FriendList'

import InputForm from './InputForm'
import OverallSharesFromOtherApps from './OverallSharesFromOtherApps'
import AddButton from './AddButton'

function ExistingGroup({set}) {
   
    return (
        <View>
            <InputForm placeholder={'Enter Group Name'} title={'Group Name'} />
            <OverallSharesFromOtherApps />
            <FriendList />
            <AddButton title={'CREATE GROUP'} set={set}/>
        </View>
    )
}

export default ExistingGroup
