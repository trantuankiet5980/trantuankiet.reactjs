import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBikes } from "../redux/bikeSlice";

export default function Screen02({ navigation }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.bikes.data);
    
    useEffect(() => {
        dispatch(fetchBikes());
    }, [dispatch]);

    return (
        <SafeAreaView style={{ flex: 1, margin: 10}}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'red' }}>The world's Best Bike</Text>
            <View style={{ marginTop: 30, marginBottom: 20 }}>
                <FlatList 
                    data={[{category: 'All'}, ...Array.from(new Set(data.map(item => item.category))).map(category => ({category}))]}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    renderItem={({ item }) => (
                    <TouchableOpacity style={{backgroundColor: 'purple', borderRadius: 10, width: 90, height: 30, justifyContent: 'center', alignItems: 'center', margin: 10}}>
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>{item.category}</Text>
                    </TouchableOpacity>
                    )}
                />
            </View>
            <View style={{ paddingBottom: 150}}>
                <FlatList 
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{flex: 1,backgroundColor: 'purple', borderRadius: 10, width: 150, height: 200,alignItems: 'center', margin: 10}}>
                            <View style={{marginTop: 5, padding: 10, flexDirection: 'row'}}>
                                <IconAntDesign name="hearto" size={20} color="#fff" />
                                <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
                            </View>
                            <Text style={{marginTop: 5, color: 'white', fontSize: 15, fontWeight: 'bold'}}>{item.name}</Text>
                            <Text style={{marginTop: 5, color: 'white', fontSize: 15, fontWeight: 'bold'}}>${item.price}</Text>
                        </TouchableOpacity>
                    )}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    );
}