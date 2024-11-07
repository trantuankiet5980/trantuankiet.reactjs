import { TouchableOpacity } from "react-native";
import { View, Text, TextInput } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBikes } from "../redux/bikeSlice";

export default function EditBike({ navigation, route }) {
    const dispatch = useDispatch();
    const bikes = useSelector((state) => state.bikes.data);
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        price: '',
        description: '',
        sale: '',
        category: ''
    });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        dispatch(fetchBikes());
    }, [dispatch]);

    useEffect(() => {
        if (bikes.length > 0) {
            const uniqueCategories = Array.from(new Set(bikes.map(bike => bike.category)));
            setCategories(uniqueCategories);
        }
        
        if (route.params?.bike) {
            setFormData(route.params.bike);
        }
    }, [bikes, route.params]);

    const handleChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Edit Bike</Text>
            </View>
            <View style={{padding: 20}}>
                <View style={{marginBottom: 15}}>
                    <Text style={{fontSize: 16, marginBottom: 5}}>Name:</Text>
                    <TextInput 
                        style={{
                            borderWidth: 1,
                            borderColor: '#ddd',
                            borderRadius: 5,
                            padding: 10
                        }}
                        placeholder="Enter bike name"
                        value={formData.name}
                        onChangeText={(text) => handleChange('name', text)}
                    />
                </View>

                <View style={{marginBottom: 15}}>
                    <Text style={{fontSize: 16, marginBottom: 5}}>Image URL:</Text>
                    <TextInput 
                        style={{
                            borderWidth: 1,
                            borderColor: '#ddd',
                            borderRadius: 5,
                            padding: 10
                        }}
                        placeholder="Enter image URL"
                        value={formData.image}
                        onChangeText={(text) => handleChange('image', text)}
                    />
                </View>

                <View style={{marginBottom: 15}}>
                    <Text style={{fontSize: 16, marginBottom: 5}}>Price:</Text>
                    <TextInput 
                        style={{
                            borderWidth: 1,
                            borderColor: '#ddd',
                            borderRadius: 5,
                            padding: 10
                        }}
                        placeholder="Enter price"
                        keyboardType="numeric"
                        value={formData.price?.toString()}
                        onChangeText={(text) => handleChange('price', text)}
                    />
                </View>

                <View style={{marginBottom: 15}}>
                    <Text style={{fontSize: 16, marginBottom: 5}}>Description:</Text>
                    <TextInput 
                        style={{
                            borderWidth: 1,
                            borderColor: '#ddd',
                            borderRadius: 5,
                            padding: 10,
                            height: 100
                        }}
                        placeholder="Enter description"
                        multiline={true}
                        numberOfLines={4}
                        value={formData.description}
                        onChangeText={(text) => handleChange('description', text)}
                    />
                </View>
                
                <View style={{marginBottom: 15}}>
                    <Text style={{fontSize: 16, marginBottom: 5}}>Category:</Text>
                    <Picker
                        selectedValue={formData.category}
                        style={{
                            borderWidth: 1,
                            borderColor: '#ddd',
                            borderRadius: 5,
                        }}
                        onValueChange={(value) => handleChange('category', value)}
                    >
                        {categories.map((category, index) => (
                            <Picker.Item key={index} label={category} value={category} />
                        ))}
                    </Picker>
                </View>

                <View style={{marginBottom: 15}}>
                    <Text style={{fontSize: 16, marginBottom: 5}}>Sale Percentage:</Text>
                    <TextInput 
                        style={{
                            borderWidth: 1,
                            borderColor: '#ddd',
                            borderRadius: 5,
                            padding: 10
                        }}
                        placeholder="Enter sale percentage"
                        keyboardType="numeric"
                        value={formData.sale?.toString()}
                        onChangeText={(text) => handleChange('sale', text)}
                    />
                </View>

                <TouchableOpacity 
                    style={{
                        backgroundColor: 'purple',
                        padding: 15,
                        borderRadius: 5,
                        alignItems: 'center'
                    }}
                >
                    <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Save Bike</Text>
                </TouchableOpacity>
            </View>
            <View style={{position: 'absolute', bottom: 0, width: '100%', alignItems: 'center'}}>
                <TouchableOpacity style={{backgroundColor: 'purple', borderRadius: 10, width: 150, height: 30, justifyContent: 'center', alignItems: 'center', margin: 10}} onPress={() => navigation.navigate('Admin')}>
                    <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Go to Admin</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}