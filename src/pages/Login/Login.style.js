import { StyleSheet ,Dimensions } from "react-native";

export default StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor:"#FFF8E7"
    },
    logo_container: { flex:1,justifyContent:"center",alignItems:"center"},
    body_container: { flex:1},
    image: {
        resizeMode: "contain",
        height: 230,
        width: "100%",
        alignSelf: "center",

    }
})