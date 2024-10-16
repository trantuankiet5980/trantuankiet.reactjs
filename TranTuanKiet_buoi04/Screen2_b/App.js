import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row', marginTop: 20, marginLeft: 10}}>
        <Image source={require('./assets/usb.png')} style={{}} />
        <Text style={{marginTop: 10, fontWeight: 'bold', maxWidth: '80%', fontSize: 16, marginLeft: 10}}>USB Bluetooth Music Receiver HJX-001-Biến loa thường thành loa Bluetooth</Text>
      </View>
      <View style={{flex: 6, margin: 30}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Cực kỳ hài lòng</Text>
          <View style={{ flexDirection: 'row'}}>
            <Image source={require('./assets/star.png')} style={{margin: 10}} />
            <Image source={require('./assets/star.png')} style={{margin: 10}} />
            <Image source={require('./assets/star.png')} style={{margin: 10}} />
            <Image source={require('./assets/star.png')} style={{margin: 10}} />
            <Image source={require('./assets/star.png')} style={{margin: 10}} />
          </View>
        </View>
        <TouchableOpacity style={{flexDirection: 'row', borderWidth: 1, borderColor: 'blue', borderRadius: 5, height: 80, alignItems: 'center', paddingHorizontal: 10}}>
          <Image source={require('./assets/camera.png')} style={{marginRight: 5}} />
          <Text style={{}}>Thêm hình ảnh</Text>
        </TouchableOpacity>
          <TextInput style={{flex: 3, borderWidth: 1, borderRadius: 5, borderColor: '#d6d6d6', marginTop: 20, textAlign: 'center', fontSize: 18,}} placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm" />
        <TouchableOpacity style={{borderRadius: 5, marginTop: 20, alignItems: 'center', borderWidth: 1, height: 40, backgroundColor: '#0d5db6', justifyContent: 'center'}}>
          <Text style={{color: '#fff', }}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

