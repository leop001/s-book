const axios = require('axios');
var fs = require('fs')

const { getConfig } = require('./configs')


function sleep(ms = 5000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function getBooks() {
  const config = getConfig('/booklet_api/v1/booklet/bookletshelflist')
  const { data } = await axios.request(config)
  const books = []
  data.data.forEach(book => {
    books.push(book.booklet_id)
  });
  await getbookletshelflist(books)
}

async function getbookletshelflist(books) {
  for (let i = 0; i < books.length; i++) {
    await sleep()
    await getbookletshelf(books[i])
  }
}
async function getbookletshelf(booklet_id) {
  const body = { 'booklet_id': booklet_id }
  const config = getConfig('/booklet_api/v1/booklet/get', body)
  const { data } = await axios.request(config)
  const book = data.data
  if (!book) return
  const bookName = book.booklet.base_info.title
  const path = `./books/${bookName}`
  fs.access(path, async function (err) {
    if (err && err.code == "ENOENT") {
      fs.mkdirSync(path)
    }
    fs.writeFile(`${path}/0.小册介绍.md`, book.introduction.content, (err) => {
      if (err) throw err
      console.log('写入成功');
    })
    await sleep()
    await getbookletSectionlist(book.sections)
  })
}

async function getbookletSectionlist(sections) {
  for (let i = 0; i < sections.length; i++) {
    await sleep()
    await getbookletSection(sections[i].section_id, i)
  }
}
async function getbookletSection(section_id, index) {
  const body = { 'section_id': section_id }
  const config = getConfig('/booklet_api/v1/booklet/get', body)
  const { data } = await axios.request(config)
  const section = data.data.section
  fs.writeFile(`${path}/${index + 1}.${section.name}.md`, section.content, (err) => {
    if (err) throw err
    console.log('写入成功');
  })
}

async function main() {
  await getBooks()
}
main()