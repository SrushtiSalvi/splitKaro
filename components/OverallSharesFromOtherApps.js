import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native'
import { Avatar, Divider } from 'react-native-paper'
import * as Contacts from 'expo-contacts';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        marginTop: '9%',
        
    },
    modal: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        // height: "90%",
        margin: "4%",
        marginBottom: '0%',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderTopStartRadius: 15,
        borderTopEndRadius: 15
    },
    hideModel: {
        backgroundColor: '#e6f2ff',
        marginRight: '4%',
        marginLeft: "4%",
        height: '13%',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15

    },
    hideModalText: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        width: "15%",
    },
    contactList: {
        padding: '2%', 
        fontSize: 18,
    }
})




function OverallSharesFromOtherApps({friendSetter, groupMembers, setModalVisible, modalVisible}) {

    const [contacts, setContacts] = useState([])




    const handleOnPress = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
                fields: [
                    phone_number = Contacts.PHONE_NUMBERS,
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
            <ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ alignSelf: 'center', width: "90%", justifyContent:'center' }}>
                    <View style={styles.modal}>
                        {contacts.map((contact, index) =>
                            <TouchableOpacity onPress={() => friendSetter(contact.firstName)} >
                                <Text key={index} style={{fontSize: 20}}>{contact.firstName}</Text>
                            <Divider style={{borderWidth:0.5}}/>
                            </TouchableOpacity>
                        )}
                    </View>
                    <TouchableOpacity style={styles.hideModel} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.hideModalText}>Back</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            </ScrollView>


            <Text style={{ fontSize: 20 }}>Add Overall Shares</Text>
            <Text>from other apps</Text>
            <TouchableOpacity onPress={handleOnPress}>
                <Avatar.Icon icon='account-plus' size={80} color="#00ffbf" backgroundColor="White" />
            </TouchableOpacity>
            <Text style={{ marginTop: '-5%', fontSize: 10, marginLeft: "4%" }}>Add a friend</Text>
            <ScrollView>
                <Text style={{fontSize: 17}}>Number of Members: {groupMembers.length}</Text>
                {groupMembers.length > 0 ? groupMembers.map((contact, id) =>
                    <View key={id}>
                        <Text style={styles.contactList}>{contact}</Text>
                        <Divider style={{borderWidth: 0.5, borderColor: 'grey'}}/>
                    </View>
                ) : <Text style={{ marginTop: '2%' }}>No Group members added Yet</Text>}
            </ScrollView>
        </View>
    )
}



export default OverallSharesFromOtherApps
