import React, {useState} from 'react'
import { View, Text } from 'react-native'
import InputForm from './InputForm'
import { TextInput } from 'react-native-paper';
import AddButton from './AddButton';

function ExistingFriend({set}) {

    const [text, setText] = useState('')

    return (
        <View>
            <InputForm placeholder={'Add Friend'} title={'Friend Name'}/>
            <View style={{flexDirection: 'row', width: '100%', marginTop: '8%',justifyContent : 'space-between', alignItems:"center"}}>
            <Text style={{fontSize: 25}}>Add Share</Text>
            <TextInput
                value={text}
                onChangeText={text => setText(text)}
                style={{width:'50%', backgroundColor: 'transparent',marginBottom: '5%'}}
            />
            </View>
            <AddButton title={'ADD EXPENSE'} set={set}/>
        </View>
    )
}

export default ExistingFriend
