import { createContext, useReducer, useEffect } from "react";
export const AuthContext = createContext()


export const authReducer = (state,action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload}    
        case 'LOGOUT':
            return {user:null}
        default:
            return state
    }
}


export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer,{
        user:null
    })

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            const token = user.token;

        // Decode the token
        const decodedToken = JSON.parse(window.atob(token.split('.')[1]));

        // Check if the token has not expired
        const tokenExpiration = decodedToken.exp;
        const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
        const isTokenValid = tokenExpiration > currentTime;

        if (isTokenValid) {
            // console.log('Valid token!');
            dispatch({type:'LOGIN', payload: user})

        } else {
            console.log('Token has expired.');
            // dispatch({type:'LOGOUT'})
            window.localStorage.removeItem('user');
            // Redirect to login page
            window.location.href = '/login';
        }
        }
    },[])

    // console.log('AuthContext state: ',state)

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}