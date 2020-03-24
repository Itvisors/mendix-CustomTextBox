import { NativeModules, StyleSheet } from "react-native";

const darkMode =
    NativeModules && NativeModules.RNDarkMode && NativeModules.RNDarkMode.initialMode
        ? NativeModules.RNDarkMode.initialMode === "dark"
        : false;

export const styles: any = StyleSheet.create({
    flex: {
        flexDirection: "row"
    },
    input: {
        flex: 1,
        padding: 15,
        fontSize: 17.5,
        borderColor: darkMode ? "#333333" : "#cdcdcd", 
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: darkMode ? "#000" : "#FFF",
        color: darkMode ? "#DEDEDE" : "#212121"
    },
    inputDisabled: {
        backgroundColor: darkMode ? "#141414" : "#f3f3f3"
    },
    inputError: {
        borderColor: "#ed1c24", 
        color: "#ed1c24"
    },
    validationMessage: {
        color: "#ed1c24"
    }
});
