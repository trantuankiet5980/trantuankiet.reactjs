import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#00CCF9'}}>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require("./assets/Ellipse.png")} />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>GROW</Text>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}> YOUR BUSINESS</Text>
      </View>
      <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', textAlign: 'center', flexWrap: 'wrap'}}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,         
    borderColor: '#E3C000', 
    backgroundColor: '#E3C000',
    borderRadius: 10,      
    paddingVertical: 10,   
    paddingHorizontal: 20, 
  },
  buttonText: {
    color: '#000', 
    fontSize: 16, 
    fontWeight: 'bold', 
    textAlign: 'center',
  }
});
