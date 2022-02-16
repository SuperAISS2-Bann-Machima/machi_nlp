import { useContext, createContext } from 'react'

export const context = createContext()

export const useController = () => new Controller(useContext(context))

class Controller {
    constructor(context) {
        this.context = context
        this.test = context.test
    }
}

export function GlobalProvider({ children }) {

    const test = 'Machima Machipataaaaaa'

    return (
        <context.Provider
            value={{
                test
            }}
        >
            {children}
        </context.Provider>
    )
}