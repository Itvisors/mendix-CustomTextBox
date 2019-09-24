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
    readonlyInput: {
        // This is not optimal, need to merge objects when assigning them to the React component but I'm missing something here...
        flex: 1,
        padding: 15,
        fontSize: 17.5,
        borderColor: "#cdcdcd", 
        borderWidth: 1,
        borderRadius: 5,

        backgroundColor: "#f3f3f3"
    }
});
