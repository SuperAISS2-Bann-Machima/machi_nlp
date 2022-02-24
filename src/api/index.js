import axios from "axios";

// Token
const token = 'RANDOMSTRING_16_CHARS'

// Client API
const client = axios.create({
    baseURL: 'https://nlp1.machima.superai.me',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

// Json Client
const jlient = axios.create({
    baseURL: 'http://localhost:5432/'
})

// Client API ZONE --------------------------------
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

// NER
export function NerAPI(data) {
    return client.post('/ner', {
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
    return client.post('/apis/aq', {
        token: token,
        anstype: type,
        sentence: data
    })
}

// Json Client API ZONE ----------------------------------
// Add Reports
export function AddReport(data) {
    return jlient.post('/reports', data)
}
