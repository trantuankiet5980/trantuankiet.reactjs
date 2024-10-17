import { View, Text, TextInput, FlatList, TouchableOpacity, Image} from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const MasterDonut = () => {
    const [donut, setDonut] = useState([])
    const [uniqueDonuts, setUniqueDonuts] = useState([]);
    const [selectedtype, setSelectedType] = useState(null);
    const [search, setSearch] = useState('');
    const [filteredDonuts, setFilteredDonuts] = useState([]);
    const fetchApi = () => {
        return fetch('https://64571b781a4c152cf97b4a06.mockapi.io/donut')
        .then((respense) => respense.json())
        .then((data) => {
            setDonut(data)
            setFilteredDonuts(data)
            const filteredDonuts = data.reduce((acc, current) => {
                const x = acc.find(item => item.type === current.type);
                if (!x) {
                    return acc.concat([current]);
                } else {
                    return acc;
                }
            }, []);
            
            setUniqueDonuts(filteredDonuts);
        }).catch((error) => {
            console.error(error)
        })
    }
    useEffect(() => {
        fetchApi()
    }, [])
    const handleSlectedType = (type) => {
        if(selectedtype === type){
            setSelectedType(null)
        }else{
            setSelectedType(type)
        }
    }
    const handleSearch = (text) => {
        setSearch(text)
        const filtered = donut.filter((item) => {
            return item.name.toLowerCase().includes(text.toLowerCase())
        })
        setFilteredDonuts(filtered)
    }
    
    return(
        <SafeAreaView style={{flex: 1, margin:10}}>
            <View>
                <Text style={{fontSize: 18, fontWeight: '300'}}>Welcome, Kiệt!</Text>
                <Text style={{fontSize: 20, fontWeight: '800'}}>Choice you Best food</Text>
            </View>
            <TextInput value={search} onChangeText={handleSearch} placeholder="Search food" style={{borderWidth: 1, padding: 8, borderRadius: 5, marginRight: 100, marginVertical: 20}}/>
            <FlatList
                data={uniqueDonuts}
                horizontal={true}
                renderItem={({item}) => {
                    const isSelected = selectedtype === item.type;
                    return (
                        <TouchableOpacity onPress={() => handleSlectedType(item.type)} style={{ borderWidth: 1, padding: 10, width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: isSelected ? '#00BDD6' : '#fff', height: 40, marginRight: 15, marginBottom: 20}}>
                            <Text>{item.type}</Text>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item.id}
            />
            <FlatList
                data={filteredDonuts.filter((item) => selectedtype ? item.type === selectedtype : true)}
                renderItem={({item}) => {
                    return (
                        <View style={{flex: 1,borderWidth: 1, borderRadius: 10, marginTop: 20, flexDirection:'row', backgroundColor: '#F4DDDD'}}>
                            <Image source={require('../assets/donut_red 1.png')}/>
                            <View style={{justifyContent: 'space-around', marginLeft: 10}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
                                <Text style={{fontWeight: '200'}}>Spicy tasty donut family</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>${item.price}.00</Text>
                                    <TouchableOpacity style={{marginLeft: 175, marginTop: 15,borderBottomRightRadius: 10, borderTopLeftRadius: 50, borderBottomLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: '#F1B000', width: 30, height: 30, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            
                        </View>
                    );
                }}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}
export default MasterDonut;