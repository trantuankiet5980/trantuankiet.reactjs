import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MasterDonut from './src/MasterDonut';
import DetailDonut from './src/DetailDonut';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MasterDonut" component={MasterDonut} options={{headerShown: false}} />
        <Stack.Screen name="DetailDonut" component={DetailDonut} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

