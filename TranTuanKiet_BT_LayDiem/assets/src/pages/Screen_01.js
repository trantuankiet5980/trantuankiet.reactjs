import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen_01({navigation}) {
    const [name, setName] = useState('');
    const changeText = () => {
        navigation.navigate('Screen_02', {user: name});
    }
    return (
        <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
            <Image source={require('../../note.png')} />
            <Text style={{color: '#8353E2', fontSize: 45, textAlign: 'center', marginTop: -50}}>MANAGE YOUR TASK</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, width: '80%', padding: 10, borderRadius: 10}}>
                <Image source={require('../../email.png')} />
                <TextInput onChangeText={setName} style={{marginLeft: 10}} placeholder="Enter your name" />
            </View>
            <TouchableOpacity onPress={changeText} style={{backgroundColor: '#00BDD6', padding: 20, width: 200, alignItems: 'center', borderRadius: 10}}>
                <Text style={{color: '#fff'}}>GET STARTED</Text>
            </TouchableOpacity>
        </View>
    );
}

