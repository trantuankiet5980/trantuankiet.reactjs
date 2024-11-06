import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditBike({ navigation }) {
    return (
        <SafeAreaView>
            
            <TouchableOpacity  onPress={() => navigation.goBack()}>
                <Text>Back</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}