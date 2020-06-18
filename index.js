
function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }
    return [result, result.length];
}

