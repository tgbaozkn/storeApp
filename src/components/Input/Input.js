import { View, TextInput} from "react-native";
import React from "react";
import styles from "./Input.style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Input = ({ placeholder, onChangeText, iconName,secureTextEntry }) => {
  return (

    <View style={ styles.container }>
      
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={ onChangeText }
        secureTextEntry={ secureTextEntry }
        
      />
      <Icon name={iconName} size={30} color="orange" />

    </View>
  );
};

export default Input;
