import React from 'react'
import { View, Text } from 'react-native'
import { Switch } from 'react-native-paper';



function FriendList() {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);


    return (
        <View style={{marginTop: "7%"}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 18}}>Avinash</Text>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    <Text style={{paddingRight:"3%"}}>256.42</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 18}}>Bhushan</Text>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    <Text style={{paddingRight:"3%"}}>345.56</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 18}}>Ankur</Text>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    <Text style={{paddingRight:"3%"}}>986.32</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 18}}>Kaitan</Text>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    <Text style={{paddingRight:"3%"}}>531.87</Text>
                </View>
            </View>            
        </View>
    )
}

export default FriendList
