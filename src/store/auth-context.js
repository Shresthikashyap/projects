import React, { useEffect } from "react";

const AuthContext = React.createContext({
    isLogged: false,
    onLogout: ()=>{},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useEffect(false);

    useEffect(()=>{
        const storedUserInfo = localStorage.getItem('LoggedIn');
        if(storedUserInfo === '1'){
          setIsLoggedIn(true);
        }
    },[]);

    const logoutHandler = () => {
        localStorage.removeItem('LoggedIn');
        setIsLoggedIn(false);
    }

    const loginHandler = () =>{
        localStorage.setItem('LoggedIn','1');
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider value={{isLoggedIn:isLoggedIn, onLogout:logoutHandler, onLogin: loginHandler}}>{props.children}</AuthContext.Provider>
}

export default AuthContext;