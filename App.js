import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
    <TouchableOpacity className="bg-teal-500 p-3 rounded-lg">
      <Text className="text-cyan-800">Click Me</Text>
    </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

