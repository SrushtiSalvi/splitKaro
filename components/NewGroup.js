import { removeGroupAsync } from 'expo-contacts';
import React, { useState, useEffect } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { Divider } from 'react-native-paper';

function NewGroup() {

    const [groups, setGroups] = useState([])

    useEffect(() => {
        setter()
    },[]);

    const setter = async () => {
        const groupList = await AsyncStorage.getItem('groupList')
        const a = await JSON.parse(groupList)
        setGroups(a)
    }



    return (
        <View>
            <Text style={{ fontSize: 25, marginTop: "5%", color: "#0080ff", marginBottom: "5%" }}>Groups</Text>
            {/* {groups.length > 0 ? groups.map((group, index) =>
                <View key={index}>
                    <View style={{ paddingTop: 5, paddingBottom: 5 }}>
                        <Text style={{ fontSize: 18 }}>{group.groupName}</Text>
                        <View style={{ fontSize: 18 }}>{group.groupMembers.map((groupMembers, i) =>
                            <View key={i}>
                                <Text>abc</Text>
                            </View>
                        )}
                        </View>
                    </View>
                    <Divider />
                </View>
            ) : <Text>No Groups Added</Text>} */}
            {groups.length > 0 ? 
            groups.map((group, index) => 
            <View key={index}>
                <Divider />
                <Text style={{fontSize: 18}}>{group.groupName}</Text>
                <View style={{marginTop: "4%"}}>
                {group.members.map((member,index) => 
                        <Text key={index}>{member}</Text>
                )}
                </View>
                <Divider />
            </View>
            ):
             null
            }


        </View>
    )
}

export default NewGroup
