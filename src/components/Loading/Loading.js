import React from "react";
import LottieView from "lottie-react-native";

function Loading ()
{
    return (<LottieView source={require("../../assets/loading.json")}  autoPlay loop speed={2} style={{ width: 300, height:300}} />);
}
export default Loading;