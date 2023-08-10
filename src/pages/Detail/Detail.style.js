import { StyleSheet } from "react-native";



export default StyleSheet.create( {
    image: {
        height: 400,
        width: 400,
        margin: 3,
        resizeMode: "contain",
        marginTop: 40,
        marginBottom: 10,
        backgroundColor:"white"
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
        marginTop: 5,
        textAlign:"center"
    },
    title: {
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight: "bold",
        textAlign:"center"
    },
    price: {
        fontSize: 18,
        marginTop:3
    }
})