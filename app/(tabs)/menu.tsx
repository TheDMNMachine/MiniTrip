import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function MenuTab() {
  return (
    <View className="flex-1 justify-center items-center bg-white dark:bg-black">
      <Text className="text-xl font-bold mb-6 text-black dark:text-white">Menu</Text>

      <Link href="/choose-trip" asChild>
        <Pressable className="mb-4 px-6 py-3 bg-blue-500 rounded-xl">
          <Text className="text-white">1. Wybierz wycieczkę</Text>
        </Pressable>
      </Link>

      <Link href="/your-trips" asChild>
        <Pressable className="mb-4 px-6 py-3 bg-green-500 rounded-xl">
          <Text className="text-white">2. Twoje wycieczki</Text>
        </Pressable>
      </Link>

      <Link href="/plans" asChild>
        <Pressable className="px-6 py-3 bg-purple-500 rounded-xl">
          <Text className="text-white">3. Plany</Text>
        </Pressable>
      </Link>
    </View>
  );
}
