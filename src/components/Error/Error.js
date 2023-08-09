import LottieView from "lottie-react-native";
import React from "react";


function Error ()
{
    return <LottieView source={require("../../assets/error.json")} autoPlay speed={2} style={{height:200,width:200}} />;
}
export default Error;