export function convertSentenceSegResponse_to_SentenceSegResult(data) {
    let wordList = []
    let posList = []

    data.map((item, _) => {
        const word = Object.keys(item)[0]
        const pos = item[word]

        wordList.push(word)
        posList.push(pos)
    })

    let curInd = 0
    let tmpWords = []
    while (true) {
        const cutInd = posList.findIndex((item, _) => item === 'O')
        if (cutInd === -1) {
            tmpWords.push(wordList.slice(curInd, wordList.length))
            break
        } else {
            posList = posList.slice(curInd, cutInd)
            tmpWords.push(wordList.slice(curInd, cutInd))
            curInd = cutInd + 1
        }
    }

    let result = []
    tmpWords.map((item, _) => {
        const tmp = item.join('')
        result.push(tmp.replace(/<_>/g, ' '))
    })

    return result
}