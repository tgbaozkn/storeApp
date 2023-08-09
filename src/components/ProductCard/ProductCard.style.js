import { StyleSheet } from "react-native";

export default StyleSheet.create( {
    container: {
        backgroundColor: "#eeeeee",
        borderColor: "#bdbdbd",
        borderWidth: 1,
        margin: 10,
        flexDirection:"row"
    },
    title: {
        fontWeight: "bold",
        fontSize:20
    },
    image: {
        resizeMode: "contain",
        minHeight:100,
        width: 100,
        backgroundColor:"white"
    },
    price: {
        textAlign: "right",
        fontSize: 18,
        fontStyle:"italic"
    },
    body_container: {
        flex: 1,
        padding: 5,
        justifyContent:"space-between"
    },
} );