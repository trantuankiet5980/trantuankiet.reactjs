import * as React from 'react';
import { Button, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen_03({navigation, route}) {
    const {user} = route.params;
    const finish = () => {
        navigation.navigate('Screen_02', {user});
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1,flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require("../../31.png")} />
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Hi {user}</Text>
                        <Text style={{fontWeight: '200'}}>Have agrate day a head</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../12.png")} />
                </TouchableOpacity>
            </View>
            <Text style={{flex: 1, fontSize: 30, marginLeft: '25%'}}>ADD YOUR JOB</Text>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderWidth: 1, height: 10, margin: 10}}>
                <Image source={require('../../fxemoji_note.png')} />
                <TextInput placeholder="Enter your job" />
            </View>
            <TouchableOpacity onPress={finish} style={{flex: 1, backgroundColor: '#00BDD6', margin: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Text>FINISH</Text>
            </TouchableOpacity>
            <Image style={{marginLeft: '20%'}} source={require('../../note.png')} />
        </SafeAreaView>
        
    );
}

