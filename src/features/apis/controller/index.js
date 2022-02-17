import { useContext, createContext } from "react";

const context = createContext()

export const useController = () => new Controller(useContext(context))

class Controller {
    constructor(context) {
        this.context = context
        this.test = 'APIS Page'
    }
}


export function APISProvider({ children }) {
    return (
        <context.Provider
            value={{

            }}
        >
            {children}
        </context.Provider>
    )
}