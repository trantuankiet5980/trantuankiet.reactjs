import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Screen_03({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Screen 01</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>end</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
