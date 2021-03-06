import { createContext, useContext, useState } from "react";
import { QuestionGenrationAPI, AddReport } from "../../../api";
import base64 from 'base64-utf8'
import { useController as useGlobalController } from '../../../core/GlobalController'

const context = createContext();

export const useController = () => new Controller(useContext(context));

class Controller {
    constructor(context) {
        this.context = context;

        this.anstype = context.anstype;
        this.setAnstype = context.setAnstype;

        this.QuestionGenerationHandle = context.QuestionGenerationHandle;

        this.isAnswer = context.isAnswer;
        this.setIsAnswer = context.setIsAnswer;

        this.questions = context.questions;

        this.setFile = context.setFile
        this.file = context.file

        this.qgLoading = context.qgLoading

        this.sendReportHandle = context.sendReportHandle
    }
}

export function ProductsProvider({ children }) {
    const global = useGlobalController()

    const [questions, setQuestions] = useState([]);

    const [anstype, setAnstype] = useState("MUL");
    const [isAnswer, setIsAnswer] = useState(false);

    const [file, setFile] = useState();

    const [qgLoading, setQgLoading] = useState(false)

    function sendReportHandle(data = {
        index: 0,
        question: '',
        answer: '',
        reports: []
    }) {
        AddReport(data).then(() => {
            global.setFlashMsg({ type: 'success', msg: `ส่งคำร้องข้อ ${data.index} สำเร็จ`, open: true })
        }).catch(err => console.log(err))
    }

    function empytyHandle() {
        setIsAnswer(false);
        setQuestions([]);
    }

    function QuestionGenerationHandle() {
        if (!file) {
            global.setFlashMsg({ type: 'error', msg: 'กรุณาอัปโหลดไฟล์', open: true })
            return null
        }

        empytyHandle();
        setQgLoading(true)
        const data = base64.encode(file)

        QuestionGenrationAPI(data, anstype)
            .then((res) => {
                setQuestions(res.data.resp);
                setQgLoading(false)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <context.Provider
            value={{
                QuestionGenerationHandle,
                anstype,
                setAnstype,
                isAnswer,
                setIsAnswer,
                questions,
                setFile, file,
                qgLoading, setQgLoading,
                sendReportHandle
            }}
        >
            {children}
        </context.Provider>
    );
}
