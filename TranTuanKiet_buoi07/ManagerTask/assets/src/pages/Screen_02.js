import { useEffect, useState } from "react";
import { Button, FlatList, Text, View, Image, TouchableOpacity, ScrollView, ScrollViewBase, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

export default function Screen_02({ navigation, route }) {
  const { user, refresh } = route.params;
  const setUser = () => {
    navigation.navigate("Screen_03", {user, item:null});
  }
  const [note, setNote] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const fetchApi = () => {
    return fetch("https://64571b781a4c152cf97b4a06.mockapi.io/kiet")
      .then((response) => response.json())
      .then((data) => {
        setNote(data);
        setSearchResult(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
    // const fetchApi = async () =>{
    //     try {
    //         const response = await fetch('https://64571b781a4c152cf97b4a06.mockapi.io/kiet')
    //         const data = await response.json()
    //         setNote(data)
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }

  useEffect(() => {
    fetchApi();
  }, [refresh]);

  const handleSearch = (text) => {
    setSearch(text);
    const filteredData = note.filter((item) => {
      return item.title.toLowerCase().includes(text.toLowerCase());
    });
    setSearchResult(filteredData);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1,flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../../12.png")} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
            <Image source={require("../../31.png")} />
            <View style={{marginLeft: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Hi {user}</Text>
                <Text style={{fontWeight: '200'}}>Have agrate day a head</Text>
            </View>
        </View>
      </View>
        <View style={{flexDirection: 'row', borderWidth: 1, margin: 20, marginTop: -100, padding: 10, borderRadius: 5}}>
            <Image source={require("../../mingcute_search-fill.png")} />
            <TextInput value={search} onChangeText={handleSearch} placeholder="Search"/>
        </View>
      <FlatList
        style={{margin: 20, height: 400}}
        data={searchResult}
        renderItem={({ item }) => {
          return (
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#d4d5da', padding: 10, marginBottom: 10, borderRadius: 20}}>
              <Image style={{marginLeft: 10}} source={require('../../mdi_marker-tick.png')}/>
              <Text>{item.title}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Screen_03', {user, item})} style={{marginRight: 10}} >
                <Image source={require('../../iconamoon_edit-bold.png')}/>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity style={{marginLeft: '40%', backgroundColor: '#00BDD6', width: 70, height: 70, alignItems: 'center', justifyContent: 'center', borderRadius: 50}} onPress={setUser} >
        <Text>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
