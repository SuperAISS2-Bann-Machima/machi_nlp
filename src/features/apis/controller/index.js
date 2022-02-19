import { useContext, createContext, useState } from "react";

const context = createContext()

export const useController = () => new Controller(useContext(context))

class Controller {
    constructor(context) {
        this.context = context

        this.paragraph = context.paragraph
        this.setParagraph = context.setParagraph
    }
}


export function APISProvider({ children }) {

    const [paragraph, setParagraph] = useState('')

    return (
        <context.Provider
            value={{
                paragraph, setParagraph
            }}
        >
            {children}
        </context.Provider>
    )
}