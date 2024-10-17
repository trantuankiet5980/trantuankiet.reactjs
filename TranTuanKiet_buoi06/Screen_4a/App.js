import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  {id: '1', img: require('./assets/ca_nau_lau.png'), name: 'Ca nấu lẩu, nấu mì mini', shop: 'Devang'},
  {id: '2', img: require('./assets/ca_nau_lau.png'), name: 'Khô bò lá chanh', shop: 'LTD Food'},
  {id: '3', img: require('./assets/ca_nau_lau.png'), name: 'Cá sấu mô hình', shop: 'Thế giới đồ chơi'},
  {id: '4', img: require('./assets/ca_nau_lau.png'), name: 'Xe hải tặc', shop: 'Thế giới đồ chơi'},
  {id: '5', img: require('./assets/ca_nau_lau.png'), name: 'Ca nấu cơm', shop: 'Devang'},
  {id: '6', img: require('./assets/ca_nau_lau.png'), name: 'Thẻ Fifa', shop: 'Minh Long Book'},
  {id: '7', img: require('./assets/ca_nau_lau.png'), name: 'Lại là Kiệt đây', shop: 'Trần Tuấn Kiệt'},
  {id: '8', img: require('./assets/ca_nau_lau.png'), name: 'Hahahahaa', shop: 'Hehe'},
  {id: '9', img: require('./assets/ca_nau_lau.png'), name: 'Rồng Xanh', shop: 'Thiên Long'},
  {id: '10', img: require('./assets/ca_nau_lau.png'), name: 'Bách hóa xanh', shop: 'BHX'},
]

const renderItem = ({item}) => {
  return (
    <View style={{backgroundColor: '#C4C4C4', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row'}}>
        <Image source={item.img}/>
        <View style={{marginLeft: 15}}>
          <Text>{item.name}</Text>
          <Text>Shop {item.shop}</Text>
        </View>
      </View>
      <TouchableOpacity style={{marginTop: 15, marginRight: 30,backgroundColor: '#F31111', width: 100, height: 45, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#fff', fontSize: 20}}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex: 1, backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
        <Image source={require('./assets/1.png')} style={{height: 35, width: 35}} />
        <Text style={{color: '#fff', fontSize: 20}}>Chat</Text>
        <Image source={require('./assets/2.png')} style={{height: 35, width: 35}} />
      </View>
      <View style={{flex: 20}}>
        <View style={{backgroundColor: '#e5e5e5', padding: 15}}>
          <Text style={{fontSize: 16}}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
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

