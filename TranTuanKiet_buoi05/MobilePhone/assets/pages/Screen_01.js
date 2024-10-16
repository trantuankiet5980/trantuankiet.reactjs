import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Screen_01({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, margin: 15 }}>
      <View style={{alignItems: 'center'}}>
        <Image source={require('../vs_blue.png')}/>
      </View>
      <Text style={{marginTop: 10}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Image source={require('../star.png')}/>
        <Image source={require('../star.png')}/>
        <Image source={require('../star.png')}/>
        <Image source={require('../star.png')}/>
        <Image source={require('../star.png')}/>
        <Text style={{marginLeft: 25}}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20,  marginTop: 10, marginRight: 25}}>1.790.000 đ</Text>
        <Text style={{fontWeight: '100', fontSize: 17, marginTop: 10, textDecorationLine: 'line-through'}}>1.790.000 đ</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginTop: 10, color: 'red', marginRight: 10}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image style={{marginTop: 10, marginBottom: 20}} source={require('../g.png')}/>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Screen_02")} style={{borderWidth: 1, alignItems: 'center', padding: 10, borderRadius: 10}}>
        <Text>4 MÀU - CHỌN MUA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderWidth: 1, alignItems: 'center', padding: 15, borderRadius: 10, backgroundColor: 'red', marginTop: 100}}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>CHỌN MUA</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
