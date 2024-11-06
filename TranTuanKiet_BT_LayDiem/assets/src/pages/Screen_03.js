import {useState} from 'react';
import { Button, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen_03({navigation, route}) {
    const {user, item} = route.params;
    const finish = async () => {
        try {
            let response
            if(item){
                response = await fetch(`https://64571b781a4c152cf97b4a06.mockapi.io/kiet/${item.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({title: newTitle})
                })
            }else{
                response = await fetch('https://64571b781a4c152cf97b4a06.mockapi.io/kiet', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({title: newTitle})
                })
            }
            if(response.ok){
                navigation.navigate('Screen_02', { user, refresh: true });
            }else{
                throw new Error('Something went wrong');
            }
        } catch (error) {
            console.log(error);
        }
    }
    const [newTitle, setNewTitle] = useState(item ? item.title : '');
    return (
        <View style={{flex: 1}}>
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
                <TextInput value={newTitle} onChangeText={setNewTitle} placeholder="Enter your job" />
            </View>
            <TouchableOpacity onPress={finish} style={{flex: 1, backgroundColor: '#00BDD6', margin: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Text>FINISH</Text>
            </TouchableOpacity>
            <Image style={{marginLeft: '20%'}} source={require('../../note.png')} />
        </View>
        
    );
}

