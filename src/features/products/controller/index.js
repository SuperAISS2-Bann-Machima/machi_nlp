import { createContext, useContext } from "react";

const context = createContext()

export const useController = () => new Controller(useContext(context))

class Controller {
    constructor(context) {
        this.context = context
        this.test = 'Product Page'
    }
}

export function ProductsProvider({ children }) {
    return (
        <context.Provider
            value={{

            }}
        >
            {children}
        </context.Provider>
    )
}