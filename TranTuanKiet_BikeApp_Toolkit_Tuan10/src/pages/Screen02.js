import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconAntDesign } from "react-native-vector-icons/AntDesign";
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
            <View style={{ marginTop: 30 }}>
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
            <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
                <Text>Go to Admin</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}