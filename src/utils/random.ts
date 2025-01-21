import { LoremIpsum } from 'lorem-ipsum'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
})

// Get random text
function getLorem() {
  return lorem.generateParagraphs(1)
}

// Get lorem with a specific number of paragraphs
function getLoremParagraphs(n: number) {
  return lorem.generateParagraphs(n)
}

// Get random image
function getImage(w = 200, h = 300) {
  return `https://picsum.photos/${w}/${h}?random=${Math.random()}`
}

// Get github avatar
function getAvatar() {
  return `https://avatars.githubusercontent.com/u/86712674?v=4`
}

export { getLorem, getLoremParagraphs, getImage, getAvatar }
