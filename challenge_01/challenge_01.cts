const buffer = Bun.file('./message_01.txt')
const message = await buffer.text()
const wordsArray = message.split(' ')
const normalizedWordsArray = wordsArray.map((word) => word.toLocaleLowerCase())
const wordCounts: any = {}
let decodedMessage = ''
for (let current = 0; current < normalizedWordsArray.length; current++) {
  const currentWord = normalizedWordsArray[current].trimEnd()
  if (wordCounts[currentWord] !== undefined) {
    wordCounts[currentWord]++
  } else {
    wordCounts[currentWord] = 1
  }
}
for (const property in wordCounts) {
  decodedMessage = decodedMessage.concat(
    `${property}${wordCounts[property]}`
  )
}
console.log(wordCounts)
console.log(decodedMessage)
