import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Admin({ navigation }) {
    return (
        <SafeAreaView>
            <Text>Admin</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Screen01')}>
                <Text>Go to Screen01</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}