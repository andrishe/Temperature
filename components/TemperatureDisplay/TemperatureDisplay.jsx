import { Text } from "react-native";
import { styles } from "./styles";

export const TemperatureDisplay = ({ value, unit }) => {
  return (
    <Text style={styles.text}>
      {value} {unit}
    </Text>
  );
};
