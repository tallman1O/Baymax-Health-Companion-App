import { Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-2xl">Edit app/index.tsx to edit this screen.</Text>
      <TextInput className="border-2 w-full"/>
    </View>
  );
}
