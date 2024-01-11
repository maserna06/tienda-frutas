import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const [theUser, setUser] = useState(null);
    const [wait, setWait] = useState(false);

    const loginUser = async ({loginEmail, loginPassword}) => {
        console.log('loginEmail:', loginEmail);
        console.log('loginPassword:', loginPassword);

        setWait(true);
        try{
            if(loginEmail === 'admin@tiendafrutas.com' && loginPassword === '123456') {
                localStorage.setItem('loggedInUser', loginEmail);
                setWait(false);
                return {success:1};
            }
            setWait(false);
            return {success:0, message: 'Usuario o contraseña incorrectos'};

        } catch(err) {
            setWait(false);
            return {success:0, message:'Server Error!: ' + err};
        }
    }

    const loggedInCheck = async () => {
        const loginToken = localStorage.getItem('loggedInUser');
        if(loginToken) {
            setUser({
                nombre: 'Admin',
                loginEmail: loginToken
            });
            return;
        }
        setUser(null);
    }

    useEffect(() => {
        async function asyncCall(){
            await loggedInCheck();
        }
        asyncCall();
    },[]);

    const logout = () => {
        localStorage.removeItem('loggedInUser');
        setUser(null);
    }

    return (
        <UserContext.Provider value={{loginUser, wait, user: theUser, loggedInCheck, logout}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;