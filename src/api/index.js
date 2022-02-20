import axios from "axios";

// Token
const token = 'RANDOMSTRING_16_CHARS'

// Client API
const client = axios.create({
    baseURL: 'https://web.machima.superai.me',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

// Word Segmentation
export function WordSegmentAPI(data) {
    return client.post('/ws', {
        txt: data
    })
}

// Pos Taging
export function PosAPI(data) {
    return client.post('/pos', {
        text: data
    })
}

// Sentence Segmentation
export function SentenceSegmentAPI(data) {
    return client.post('/ss', {
        text: data
    })
}

// Question Generation
export function QuestionGenrationAPI(data, type = 'BLK') {
    return client.post('/aq', {
        token: token,
        anstype: type,
        sentence: data
    })
}
