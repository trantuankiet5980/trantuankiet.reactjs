import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Screen_02({ navigation }) {
  const images = [
    { id: 1, uri: require("../vs_blue.png"), color: "xanh", provide: "Tiki Tradding", price: "1.790.000 đ" },
    { id: 2, uri: require("../vs_silver.png"), color: "bạc", provide: "Shopee Tradding", price: "2.790.000 đ" },
    { id: 3, uri: require("../vs_red.png"), color: "đỏ", provide: "Lazada Tradding", price: "3.790.000 đ" },
    { id: 4, uri: require("../vs_black.png"), color: "đen", provide: "KKK Tradding", price: "4.790.000 đ" },
  ];
  const [imgIndex, setImgIndex] = useState(images[0]);
  const changeImage = (index) => {
    setImgIndex(images[index]); 
  };
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex: 1,height: 200, overflow: 'hidden', justifyContent: 'center', margin: 10, flexDirection: 'row'}}>
        <Image style={{width: 160, height: 200}} source={imgIndex.uri} />
        <View style={{flex:1, marginLeft: 20, justifyContent: 'space-between'}}>
          <Text style={{maxWidth: '100%'}}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
          <Text>Màu: {imgIndex.color}</Text>
          <Text>Nhà cung cấp: {imgIndex.provide}</Text>
          <Text>{imgIndex.price}</Text>
        </View>
      </View>
      <View style={{flex: 3, backgroundColor: '#C4C4C4', marginTop: 10, justifyContent: 'space-between'}}>
        <View> 
          <Text style={{margin: 10}}>Chọn một màu bên dưới:</Text>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={{backgroundColor: '#C5F1FB', width: 100, height: 100, margin: 10}} onPress={() => changeImage(0)}></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#F30D0D', width: 100, height: 100, margin: 10}} onPress={() => changeImage(1)}></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#000', width: 100, height: 100, margin: 10}} onPress={() => changeImage(2)}></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#234896', width: 100, height: 100, margin: 10}} onPress={() => changeImage(3)}></TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor: '#1952E294', padding: 10, alignItems: 'center', margin: 10, borderRadius: 10}}>
          <Text style={{color: '#fff'}}>XONG</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
