import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  {id: '1', img: require('./assets/cap.png'), name: 'Cáp chuyển từ cổng USB sang PS2', price: 69000},
  {id: '2', img: require('./assets/cap.png'), name: 'Khô bò lá chanh', price: 69000},
  {id: '3', img: require('./assets/cap.png'), name: 'Khô bò lá chanh', price: 69000},
  {id: '4', img: require('./assets/cap.png'), name: 'Xe hải tặc', price: 69000},
  {id: '5', img: require('./assets/cap.png'), name: 'Ca nấu cơm', price: 69000},
  {id: '6', img: require('./assets/cap.png'), name: 'Thẻ Fifa', price: 69000},
  {id: '7', img: require('./assets/cap.png'), name: 'Lại là Kiệt đây', price: 69000},
  {id: '8', img: require('./assets/cap.png'), name: 'Hahahahaa', price: 69000},
  {id: '9', img: require('./assets/cap.png'), name: 'Rồng Xanh', price: 69000},
  {id: '10', img: require('./assets/cap.png'), name: 'Bách hóa xanh', price: 69000},
]

const renderItem = ({item}) => {
  return (
    <View style={{margin: 10, backgroundColor: '#C4C4C4', borderBottomWidth: 1, justifyContent: 'space-between', flex: 1}}>
        <Image source={item.img} style={{width: '50%', resizeMode: 'contain'}}/>
        <View style={{marginLeft: 15}}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex: 1, backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('./assets/1.png')} style={{height: 35, width: 35}} />
          <View style={{flexDirection: 'row', backgroundColor: '#fff', width: 250, alignItems: 'center', marginLeft: 10}}>
            <Image source={require('./assets/7.png')} style={{marginLeft: 10}}/>
            <TextInput placeholder='Dây cáp usb' placeholderTextColor='#7D5B5B' style={{marginLeft: 10}}/>
          </View>
        </View>
        <Image source={require('./assets/2.png')} style={{height: 35, width: 35}} />
        <Image source={require('./assets/6.png')} style={{height: 35, width: 35}} />
      </View>
      <View style={{flex: 20, backgroundColor: '#C4C4C4'}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
      <View style={{flex: 1, backgroundColor: '#1BA9FF', padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Image source={require('./assets/3.png')} style={{height: 30, width: 30}} />
        <Image source={require('./assets/4.png')} style={{height: 30, width: 30}} />
        <Image source={require('./assets/5.png')} style={{height: 30, width: 30}} />
      </View>
    </SafeAreaView>
  );
}

