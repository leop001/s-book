const axios = require('axios');

const config = {
  method: 'get',
  url: `http://127.0.0.1:4523/m1/3832724-0-default/test`,
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function getBooks() {
  const { data } = await axios.request(config)
  const books = [1, 2, 3, 4, 5]
  await getbookletshelflist(books)
}

async function getbookletshelflist(books) {
  for (let i = 0; i < books.length; i++) {
    await sleep(1000)
    await getbookletshelf(books[i])
  }
}
async function getbookletshelf() {
  const { data } = await axios.request(config)
  const book = data.data
  console.log(book.num)
}

async function main() {
  await getBooks()
}
main()