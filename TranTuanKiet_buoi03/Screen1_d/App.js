import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider style={{ backgroundColor: "#d8efde" }}>
      <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize: 60, fontWeight: 'bold'}}>LOGIN</Text>
      </View>
      <View style={{ flex: 1, marginLeft: 10, marginRight: 10, marginTop: 50 }}>
        <TextInput
          style={{backgroundColor: "#a9b3ac", padding: 10, marginBottom: 20 }}
          placeholder="Email"
        />
        <TextInput
          style={{backgroundColor: "#a9b3ac", padding: 10 }}
          placeholder="Password"
        />
      </View>
      <View style={{ flex: 2 }}>
        <TouchableOpacity
          style={{ backgroundColor: "#c34e3b", padding: 10, margin: 10 }}
        >
          <Text style={{ color: "white", textAlign: "center", fontWeight: 'bold' }}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', marginTop: 10 }}>
          When you agree to terms and conditions
        </Text>
        <TouchableOpacity style={{ alignItems: 'center', marginTop: 10 }}>
          <Text style={{ color: "blue" }}>Forgot your password?</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', marginTop: 10 }}>Or login with</Text>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 100, marginLeft: 10, marginRight: 10}}>
        <TouchableOpacity
          style={{
            flex: 1, 
            backgroundColor: "#275a8d",
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={require('./assets/fb.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1, 
            backgroundColor: "#1593c5",
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={require('./assets/zl.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1, // Make each button take equal width
            backgroundColor: "#d8efde",
            padding: 10,
            borderWidth: 1,
            borderColor: '#5cb0d7',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={require('./assets/gg.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
