import { StyleSheet } from "react-native";



export default StyleSheet.create( {
    image: {
        height: 300,
        width: 300,
        margin:3
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
        margin:3
    },
    category: {
        fontSize: 20,
        fontStyle: "italic",
        textTransform:"capitalize"
    },
    detail: {
        fontSize: 15,
        fontWeight: "bold",
        textTransform: "capitalize",
        marginTop:5
    },
    title: {
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight:"bold"
    },
    price: {
        fontSize: 18,
        marginTop:3
    }
})