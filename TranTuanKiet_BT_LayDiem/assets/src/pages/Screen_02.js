import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotesStart, searchNotes } from '../reducers/notesReducer';
import { loadNotes, filterNotes } from '../slices/notesSlice';
import { FlatList, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

export default function Screen_02({ navigation, route }) {
  const { user } = route.params;
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.items);
  const loading = useSelector(state => state.notes.loading);

  // Fetch notes when the screen is focused
  useFocusEffect(
    useCallback(() => {
       dispatch(fetchNotesStart());
      // dispatch(loadNotes());
    }, [dispatch])
  );

  const handleSearch = (text) => {
    dispatch(searchNotes(text));
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../../12.png")} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require("../../31.png")} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Hi {user}</Text>
            <Text style={{ fontWeight: '200' }}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      {/* Search Input */}
      <View style={{ flexDirection: 'row', borderWidth: 1, margin: 20, padding: 10, borderRadius: 5 }}>
        <Image source={require("../../mingcute_search-fill.png")} />
        <TextInput placeholder="Search" onChangeText={handleSearch} style={{ flex: 1 }} />
      </View>

      {/* Notes List */}
      {loading ? (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Loading...</Text>
      ) : (
        <FlatList
          style={{ margin: 20 }}
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#d4d5da', padding: 10, marginBottom: 10, borderRadius: 20 }}>
              <Image style={{ marginLeft: 10 }} source={require('../../mdi_marker-tick.png')} />
              <Text style={{}}>{item.title}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Screen_03', { user, item })} style={{ marginRight: 10 }}>
                <Image source={require('../../iconamoon_edit-bold.png')} />
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {/* Add Button */}
      <TouchableOpacity style={{ marginLeft: '40%', backgroundColor: '#00BDD6', width: 70, height: 70, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }} onPress={() => navigation.navigate("Screen_03", { user, item: null })}>
        <Text style={{ fontSize: 24, color: 'white' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
