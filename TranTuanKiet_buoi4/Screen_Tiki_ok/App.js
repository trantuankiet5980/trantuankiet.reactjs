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
          <View style={{ flexDirection: "row" }}>
            <Image source={require("./assets/book.png")} style={{}} />
            <View style={{}}>
              <Text>Nguyên hàm tích phân và ứng</Text>
              <Text>Cung cấp bởi Tiki Trading</Text>
              <Text>141.800 đ</Text>
              <Text>141.800 đ</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <TextInput style={{ textAlign: "center" }} placeholder="1" />
                  <TouchableOpacity>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Text>Mua sau</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Mã giảm giá đã lưu</Text>
            <TouchableOpacity>
              <Text>Xem tại đây</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput placeholder="Mã giảm giá" />
            <TouchableOpacity>
              <Text>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: '#fff', marginTop: -30, height: 70, flexDirection: 'row'}}>
        <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox</Text>
        <TouchableOpacity>
          <Text>Nhập tại đây</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#fff', marginTop: 15, height: 70, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Tạm tính</Text>
        <Text>141.800 đ</Text>
      </View>
      <View style={{backgroundColor: '#fff', marginTop: '30%', height: 120}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Thành tiền</Text>
          <Text>141.800 đ</Text>
        </View>
        <TouchableOpacity style={{backgroundColor: '#ff6600', alignItems: 'center', padding: 10, borderRadius: 5}}>
          <Text style={{color: '#fff'}}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
