import { StyleSheet } from "react-native";

export const styles: any = StyleSheet.create({
    flex: {
        flexDirection: "row"
    },
    input: {
        flex: 1,
        padding: 15,
        fontSize: 17.5,
        borderColor: "#cdcdcd", 
        borderWidth: 1,
        borderRadius: 5
    },
    inputDisabled: {
        backgroundColor: "#f3f3f3"
    },
    inputError: {
        borderColor: "#ed1c24", 
        color: "#ed1c24"
    }
});
