import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen_01  from './assets/src/pages/Screen_01';
import Screen_02 from './assets/src/pages/Screen_02';
import Screen_03 from './assets/src/pages/Screen_03';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={{}}>
      <Stack.Navigator>
        <Stack.Screen name="Screen_01" component={Screen_01} options={{headerShown: false}}/>
        <Stack.Screen name="Screen_02" component={Screen_02} options={{headerShown: false}}/>
        <Stack.Screen name="Screen_03" component={Screen_03} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
