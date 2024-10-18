import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailDonut = ({ navigation, route }) => {
  const { donut } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, margin: 20 }}>
        <Image
          source={{ uri: donut.img }}
          style={{ width: 400, height: 400 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{donut.name}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Spicy tasty donut family</Text>
          <Text>${donut.price}.00</Text>
        </View>
        <View style={{marginTop: 30,flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text>Delivery in</Text>
            <Text>30 min</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={{backgroundColor: '#F1B000', padding: 5, width: 20, borderRadius: 30}}>
              <Text>-</Text>
            </TouchableOpacity>
            <TextInput value="1" />
            <TouchableOpacity style={{backgroundColor: '#F1B000', padding: 5, width: 20, borderRadius: 30}}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{marginTop: 20, marginBottom: 180}}>{donut.description}</Text>
        <TouchableOpacity 
          style={{flex: 1,justifyContent: 'flex-end',backgroundColor: '#F1B000', borderWidth: 1, padding: 10, borderRadius: 10, marginTop: 20, alignItems: 'center'}}
          onPress={() => navigation.navigate("MasterDonut", { refresh: true })}
        >
          <Text style={{color: '#fff', fontSize: 20}}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default DetailDonut;
