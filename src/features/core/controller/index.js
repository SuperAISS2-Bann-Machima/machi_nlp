import { createContext, useContext } from "react";

const context = createContext()

export const useController = () => new Controller(useContext(context))

class Controller {
    constructor(context) {
        this.context = context
        this.test = 'Core Page'
    }
}

export function CoreProvider({ children }) {
    return (
        <context.Provider value={{

        }}>
            {children}
        </context.Provider>
    )
}