import { createContext, useReducer } from "react";

export const PatientsContext = createContext();

export const patientsReducer = (state,action) => {
    switch (action.type) {
        case 'SET_PATIENTS':
            return{ ...state,
                patients: [...action.payload] }
        case 'CREATE_PATIENTS':
            return{
                patients:[action.payload, ...state.patients]
            }
        default:
            return state
    }
}

export const PatientsContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(patientsReducer,{
        patients: null
    });
    

    return(
        <PatientsContext.Provider value={{...state,dispatch}}>
            {children}
        </PatientsContext.Provider>
    )
}