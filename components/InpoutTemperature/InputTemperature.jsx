import { TextInput, Text, View } from "react-native";
import { styles } from "./styles";

export const InputTemperature = ({ defaultValue, onChangeText, unit }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        $
        placeholder="Entrez une température"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
      <Text style={styles.unit}>{unit}</Text>
    </View>
  );
};
