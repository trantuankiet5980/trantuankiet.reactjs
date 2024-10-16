import { StatusBar } from 'expo-status-bar';
import {Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient colors={['#FBCB00', '#BF9A00']} style={{flex: 1}}>
      <SafeAreaView style={{flex: 1, margin: 10}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 50}}>LOGIN</Text>
        </View>
        <View style={{flex: 2}}>
          <View style={{flexDirection: 'row', borderWidth: 1, borderColor: '#ecdfac', backgroundColor: '#dcbd3b', height: 50, marginBottom: 20}}>
            <Image source={require('./assets/Vector.png')} style={{margin: 10, marginTop: 25}} />
            <TextInput placeholder="Username" />
          </View>
          <View style={{flexDirection: 'row', borderWidth: 1, borderColor: '#ecdfac', backgroundColor: '#dcbd3b', height: 50}}>
            <Image source={require('./assets/Group.png')} style={{margin: 10, marginTop: 10}}/>
            <TextInput placeholder="Password" secureTextEntry={true} style={{ flex: 1}}/>
            <TouchableOpacity style={{ margin: 10, marginTop: 10 }}>
              <Image source={require('./assets/eye.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity style={{backgroundColor: '#000', height: 50, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Forgot Password?</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

