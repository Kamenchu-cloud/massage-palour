import { createContext } from "react";
import massageProfessionals from "../massage_assets/assetstherapists";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = 'Ksh'


    const value = {
        massageProfessionals, 
        currencySymbol
    }

    return (
        <AppContext.Provider value={value}>
            {
                props.children
            }
        </AppContext.Provider>
    )

}

export default AppContextProvider