import { Appearance, StyleSheet } from "react-native";

const darkMode = Appearance.getColorScheme() === "dark";

export const styles: any = StyleSheet.create({
    flex: {
        flexDirection: "row"
    },
    input: {
        flex: 1,
        fontSize: 17.5,
        borderColor: darkMode ? "#333333" : "#cdcdcd",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: darkMode ? "#000" : "#FFF",
        color: darkMode ? "#DEDEDE" : "#212121",
        minWidth: 48,
        minHeight: 48,
        paddingHorizontal: 8,
        paddingVertical: 8
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
