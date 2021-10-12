import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native'
import { Avatar } from 'react-native-paper'
import * as Contacts from 'expo-contacts';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        marginTop: '9%'
    },
    modal: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    // height: "90%",
    margin: "5%",
    marginBottom: '0%',
    },
    hideModel: {
        backgroundColor: 'green', 
        marginRight: '5%', 
        marginLeft: "5%",
        height: '5%',
        justifyContent: 'center'
    },
    hideModalText: {
        alignSelf: 'center',
    },
    contactList: {
        fontSize: 20,

    }
})




function OverallSharesFromOtherApps() {

    const [contacts, setContacts] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [groupMembers, setGroupMembers] = useState([])

    const friendSetter = (contact) => {
        const existingFriends = groupMembers;
        existingFriends.push(contact) 
        setGroupMembers(existingFriends)
        console.log(groupMembers)
        setModalVisible(false)
    }


    const handleOnPress = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
                fields: [
                   phone_number =  Contacts.PHONE_NUMBERS,
                   personName = Contacts.name
                ],
                pageSize: 10,
                pageOffset: 0,
            });

            if (data.length > 0) {
                const contact = data;
                console.log(contact.length)
                setContacts(contact);
            }
        }
        setModalVisible(true)
    }



    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    //Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{alignSelf: 'center'}}>
                    <View style={styles.modal}>
                            {contacts.map((contact,index) =>
                            <TouchableOpacity onPress={() => friendSetter(contact.firstName)} >
                                <Text key={index} style={styles.contactList}>{contact.firstName}</Text>
                            </TouchableOpacity>
                            )}
                    </View>
                    <TouchableOpacity style={styles.hideModel} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.hideModalText}>Hide Modal</Text>
                        </TouchableOpacity>
                </View>
            </Modal> 


            <Text style={{ fontSize: 20 }}>Add Overall Shares</Text>
            <Text>from other apps</Text>
            <TouchableOpacity onPress={handleOnPress}>
                <Avatar.Icon icon='account-plus' size={80} color="#00ffbf" backgroundColor="White" />
            </TouchableOpacity>
            <Text style={{ marginTop: '-5%', fontSize: 10, marginLeft: "4%" }}>Add a friend</Text>
            <ScrollView>
                <Text>Number of Members: {groupMembers.length}</Text>
                {groupMembers.length > 0 ? groupMembers.map((contact, id) => 
                    <View key={id}>
                        <Text>{contact}</Text>
                    </View>
                ): <Text>No Group members added Yet</Text>}
            </ScrollView>
        </View>
    )
}



export default OverallSharesFromOtherApps
