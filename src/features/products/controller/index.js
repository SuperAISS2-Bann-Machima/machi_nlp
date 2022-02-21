import { createContext, useContext, useState } from "react";
import { QuestionGenrationAPI } from '../../../api'

const context = createContext()

export const useController = () => new Controller(useContext(context))

class Controller {
    constructor(context) {
        this.context = context

        this.anstype = context.anstype
        this.setAnstype = context.setAnstype

        this.QuestionGenerationHandle = context.QuestionGenerationHandle

        this.isAnswer = context.isAnswer
        this.setIsAnswer = context.setIsAnswer

        this.questions = context.questions
    }
}

export function ProductsProvider({ children }) {
    const [questions, setQuestions] = useState([])

    const [anstype, setAnstype] = useState('MUL')
    const [isAnswer, setIsAnswer] = useState(false)

    function empytyHandle() {
        setIsAnswer(false)
        setQuestions([])
    }

    function QuestionGenerationHandle() {
        empytyHandle()

        QuestionGenrationAPI('', anstype).then(res => {
            setQuestions(res.data.resp)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <context.Provider
            value={{
                QuestionGenerationHandle,
                anstype, setAnstype,
                isAnswer, setIsAnswer,
                questions
            }}
        >
            {children}
        </context.Provider>
    )
}