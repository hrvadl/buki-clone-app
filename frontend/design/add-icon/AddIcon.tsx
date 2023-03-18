import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { useTheme } from "react-native-paper";

type Props = {
  style?: ViewStyle;
  touchable?: boolean;
};

const AddIcon = ({ style, touchable }: Props) => {
  const theme = useTheme();

  return (
    <>
      {touchable ? (
        <TouchableOpacity
          style={[
            styles.Container,
            style,
            { backgroundColor: theme.colors.primary },
          ]}
        >
          <Image source={require("@/assets/add.png")} />
        </TouchableOpacity>
      ) : (
        <View
          style={[
            styles.Container,
            style,
            { backgroundColor: theme.colors.primary },
          ]}
        >
          <Image source={require("@/assets/add.png")} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 40,
    height: 40,
  },
});

export default AddIcon;
