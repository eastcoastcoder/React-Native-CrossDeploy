import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: "bold" },
  buttonView: {
    padding: 10,
    width: Platform.OS === 'web' ? "25em" : undefined
  },
  pickerView: {
    padding: 10,
    width: Platform.OS === 'web' ? "15em" : undefined
  },
  customComponentStyles: {
    padding: 10
  }
});
