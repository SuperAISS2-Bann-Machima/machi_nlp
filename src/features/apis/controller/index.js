import { useContext, createContext, useState, useEffect } from "react";
import { WordSegmentAPI, SentenceSegmentAPI, PosAPI, NerAPI } from '../../../api'
import { convertSentenceSegResponse_to_SentenceSegResult } from "../utils/convert";

const context = createContext()

export const useController = () => new Controller(useContext(context))

class Controller {
    constructor(context) {
        this.context = context

        this.ProcessingHandle = context.ProcessingHandle

        this.paragraph = context.paragraph
        this.setParagraph = context.setParagraph

        this.wordSeg = context.wordSeg
        this.senSeg = context.senSeg
        this.pos = context.pos
        this.ner = context.ner
    }
}


export function APISProvider({ children }) {

    const [paragraph, setParagraph] = useState('')

    const [wordSeg, setWordSeg] = useState('')
    const [wordSegWhiteSpace, setWordSegWhiteSpace] = useState('')
    const [senSeg, setSenSeg] = useState('')
    const [pos, setPos] = useState({})
    const [ner, setNer] = useState({})

    // Function that handle called WordSegmentAPI
    function WordSegmentHandle() {
        let result = ''
        let wSpace = ''
        WordSegmentAPI(paragraph).then(res => {
            res.data.resp.map((item, ind) => {
                if (res.data.resp.length - 1 !== ind) {
                    result += item + ' | '
                    if (item !== ' ')
                        wSpace += item + ' '
                } else {
                    result += item
                    wSpace += item
                }
            })

            setWordSeg(result)
            setWordSegWhiteSpace(wSpace)
        }).catch(err => {
            console.log(err);
        })

    }

    // Function that handle called POS Tagging
    function PosHandle() {
        PosAPI(wordSegWhiteSpace).then(res => {
            setPos(res.data.resp)
        }).catch(err => {
            console.log(err);
        })
    }

    // Function that handke called NER
    function NerHandle() {
        NerAPI(wordSegWhiteSpace).then(res => {
            setNer(res.data.resp)
        }).catch(err => {
            console.log(err);
        })
    }

    // Function that handle called SentenceSegmentAPI
    function SentenceSegmentHandle() {
        SentenceSegmentAPI(wordSegWhiteSpace).then(res => {
            const result = convertSentenceSegResponse_to_SentenceSegResult(res.data.resp)
            setSenSeg(result.join(' | '))
        }).catch(err => {
            console.log(err)
        })
    }

    function ProcessingHandle() {
        WordSegmentHandle()
    }

    useEffect(() => {
        if (wordSegWhiteSpace.length) {
            SentenceSegmentHandle()
            PosHandle()
            NerHandle()
        }
    }, [wordSegWhiteSpace])

    return (
        <context.Provider
            value={{
                paragraph, setParagraph,
                ProcessingHandle,
                wordSeg, senSeg,
                pos, ner
            }}
        >
            {children}
        </context.Provider>
    )
}