import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#c4c4c4'}}>
      <View style={{flex: 2,backgroundColor: '#fff', marginBottom: 50}}>
        <View style={{flex: 1,margin: 15 }}>
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <Image source={require("./assets/book.png")} style={{}} />
            <View style={{flex: 1, marginLeft: 30, justifyContent: 'space-around'}}>
              <Text style={{fontSize:12, fontWeight:'bold'}}>Nguyên hàm tích phân và ứng Cung cấp bởi Tiki Trading</Text>
              <Text style={{fontSize: 18, color: 'red', fontWeight: 'bold'}}>141.800 đ</Text>
              <Text style={{textDecorationLine: 'line-through', color:'#808080', fontSize: 12}}>141.800 đ</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                  <TouchableOpacity style={{width: 12, height: 16, backgroundColor: '#808080', alignItems: 'center'}}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <TextInput style={{ textAlign: "center" }} placeholder="1" />
                  <TouchableOpacity style={{width: 12, height: 16, backgroundColor: '#808080', alignItems: 'center'}}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={{marginTop: 5}}>
                  <Text style={{color: '#134FEC'}}>Mua sau</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{fontSize: 12, fontWeight: 'bold', marginRight: 30}}>Mã giảm giá đã lưu</Text>
            <TouchableOpacity>
              <Text style={{color:'#134FEC', fontWeight: 'bold'}}>Xem tại đây</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 50}}>
            <TextInput style={{flex: 1.5,borderWidth: 1, borderRadius: 5,alignItems: 'center', padding: 10, marginRight: 20, fontSize: 20}} placeholder="Mã giảm giá" />
            <TouchableOpacity style={{flex: 1, backgroundColor: '#0a5eb7', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
              <Text style={{color: "#fff", fontSize: 20, fontWeight: 'bold'}}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: '#fff', marginTop: -30, height: 70, flexDirection: 'row', padding: 20}}>
        <Text style={{fontWeight: 'bold'}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox</Text>
        <TouchableOpacity>
          <Text style={{color:'blue', marginLeft: 10}}>Nhập tại đây?</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#fff', marginTop: 15, height: 70, flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
        <Text style={{fontSize: 18, fontWeight:'bold'}}>Tạm tính</Text>
        <Text style={{fontSize: 18, color: 'red', fontWeight: 'bold'}}>141.800 đ</Text>
      </View>
      <View style={{backgroundColor: '#fff', marginTop: '30%', height: 120}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
          <Text style={{color: '#808080', fontSize: 18}}>Thành tiền</Text>
          <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold'}}>141.800 đ</Text>
        </View>
        <TouchableOpacity style={{backgroundColor: '#ff6600', alignItems: 'center', padding: 10, borderRadius: 5, marginLeft: 20, marginRight: 20}}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
