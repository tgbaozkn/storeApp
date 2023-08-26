import AsyncStorage from "@react-native-async-storage/async-storage";

export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      const user = action.payload;

      AsyncStorage.setItem("@user", JSON.stringify(user));

      return { ...state, user };
    case "REMOVE_USER":
      AsyncStorage.removeItem("@user");
      return { ...state, user: null };

    default:
      return state;
  }
}
