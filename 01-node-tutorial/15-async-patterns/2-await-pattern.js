const { readFile, writeFile } = require('fs').promises  //// adding .promisify, no need util.promisify

//// util module
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')   //// using util module, change readFile to readFilePromise
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(    //// using util module, change readFile to writeFilePromise
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()

//// use of promise
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)    //// not proceed and cause exception
//       } else {
//         resolve(data)  //// proceed and pass data
//       }
//     })
//   })
// }
//
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))