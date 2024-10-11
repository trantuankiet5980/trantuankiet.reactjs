import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#00CCF9'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require("./assets/lock.png")} />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25,fontWeight: 'bold'}}>FORGET</Text>
        <Text style={{fontSize: 25,fontWeight: 'bold'}}> PASSWORD</Text>
      </View>
      <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', textAlign: 'center', flexWrap: 'wrap'}}>
        Provide your account’s email for which you want to reset your password
        </Text>
        <View style={{flexDirection: 'row', backgroundColor: '#C4C4C4', marginTop: 20}}>
          <Image source={require("./assets/email.png")} />
          <TextInput style={{width: 300, height: 40, paddingLeft: 10}} placeholder="Email" />
        </View>
      </View>
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
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
