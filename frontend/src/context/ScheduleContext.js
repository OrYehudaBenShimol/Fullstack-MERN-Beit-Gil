import { createContext, useReducer } from "react";

export const ScheduleContext = createContext();

export const scheduleReducer = (state,action) => {
    switch (action.type) {
        case 'SET_SCHEDULES':
            return{ ...state, schedules: [...action.payload] }
        case 'CREATE_SCHEDULE':
            return{
                schedules:[action.payload, ...state.schedules]
            }
        case 'DELETE_SCHEDULE':
            return{
                schedules: state.schedules.filter((u) => u._id  !== action.payload._id)
            }
        default:
            return state
    }
}

export const SchedulesContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(scheduleReducer,{
        schedules: null
    });
    

    return(
        <ScheduleContext.Provider value={{...state,dispatch}}>
            {children}
        </ScheduleContext.Provider>
    )
}