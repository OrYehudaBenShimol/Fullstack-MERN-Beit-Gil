import { createContext, useReducer } from "react";

export const StatisticsContext = createContext();

export const statisticsReducer = (state,action) => {
    switch (action.type) {
        case 'SET_STATISTICS':
            return{ ...state, statistics: [...action.payload] }
        default:
            return state
    }
}

export const StatisticsContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(statisticsReducer,{
        statistics: null
    });
    

    return(
        <StatisticsContext.Provider value={{...state,dispatch}}>
            {children}
        </StatisticsContext.Provider>
    )
}