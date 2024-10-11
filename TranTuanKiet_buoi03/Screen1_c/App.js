import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#00CCF9'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 70,fontWeight: 'bold'}}>CODE</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: -100}}>
        <Text style={{fontSize: 20,fontWeight: 'bold'}}>VERIFICATION</Text>
      </View>
      <View style={{ marginTop: -30, flex: 1, paddingHorizontal: 35, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', textAlign: 'center', flexWrap: 'wrap'}}>
        Enter ontime password sent on ++849092605798
        </Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TextInput style={{width: 40, height: 40, paddingLeft: 10,borderWidth: 1}}/>
          <TextInput style={{width: 40, height: 40, paddingLeft: 10,borderWidth: 1}}/>
          <TextInput style={{width: 40, height: 40, paddingLeft: 10,borderWidth: 1}}/>
          <TextInput style={{width: 40, height: 40, paddingLeft: 10,borderWidth: 1}}/>
          <TextInput style={{width: 40, height: 40, paddingLeft: 10,borderWidth: 1}}/>
          <TextInput style={{width: 40, height: 40, paddingLeft: 10,borderWidth: 1}}/>
        </View>
      </View>
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center', marginTop: -300}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
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
