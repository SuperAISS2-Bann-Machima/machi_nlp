import { useContext, createContext, useState } from 'react'
import Snackbar from '../components/common/Snackbar'

export const context = createContext()

export const useController = () => new Controller(useContext(context))

class Controller {
    constructor(context) {
        this.context = context
        this.test = context.test

        this.setFlashMsg = context.setFlashMsg
    }
}

export function GlobalProvider({ children }) {

    const test = 'Machima Machipataaaaaa'
    const [flashMsg, setFlashMsg] = useState({ type: 'success', msg: '', open: false })
    function handleCloseFlashMsg() {
        setFlashMsg({ open: false, msg: '', type: flashMsg.type })
    }

    return (
        <context.Provider
            value={{
                test, setFlashMsg
            }}
        >
            {
                flashMsg && (
                    <Snackbar
                        msg={flashMsg.msg}
                        type={flashMsg.type}
                        open={flashMsg.open}
                        handleClose={handleCloseFlashMsg}
                    />
                )
            }

            {children}
        </context.Provider>
    )
}