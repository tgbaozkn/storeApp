import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const AuthProvider = ( { children } ) =>
{
    const [ user, setUser ] = useState( null );
    const [ isAuthLoading, setAuthLoading ] = useState( true );

  
    useEffect( () =>
    {
        AsyncStorage.getItem( "@user" ).then( userSession =>
            {
            userSession &&
         
                setUser( JSON.parse( userSession ) );
                setAuthLoading( false );
        })
    },[] )
    const store = configureStore(  { reducer: reducer, preloadedState:{user,isAuthLoading} } );
    return <Provider store={store}>{ children}</Provider>
}
export default AuthProvider;