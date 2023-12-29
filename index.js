const axios = require("axios");
const fs = require("fs");

const { getConfig } = require("./utils/config");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function formatTitle(title) {
  if (title.includes("/")) {
    return title.replace("/", "·");
  } else {
    return title;
  }
}

async function getBooks() {
  const config = getConfig("/booklet_api/v1/booklet/bookletshelflist");
  const { data } = await axios.request(config);
  if (!data.data) {
    throw "User information error"
  }
  const books = [];
  data.data.forEach((book) => {
    books.push(book.booklet_id);
  });
  await getbookletshelflist(books);
}

async function getbookletshelflist(books) {
  for (let i = 0; i < books.length; i++) {
    await sleep(1000);
    await getbookletshelf(books[i]);
  }
}
async function getbookletshelf(booklet_id) {
  const body = { booklet_id: booklet_id };
  const config = getConfig("/booklet_api/v1/booklet/get", body);
  const { data } = await axios.request(config);
  const book = data.data;
  if (!book) return;
  const bookName = formatTitle(book.booklet.base_info.title);
  const path = `./books/${bookName}`;
  fs.mkdir(path, () => { });
  fs.writeFile(`${path}/0.小册介绍.md`, book.introduction.content, (err) => {
    if (err) throw err;
    console.log(`${bookName}-0.小册介绍  写入成功`);
  });
  await sleep(2000);
  await getbookletSectionlist(path, bookName, book.sections);
}

async function getbookletSectionlist(path, bookName, sections) {
  for (let i = 0; i < sections.length; i++) {
    await sleep(3000);
    await getbookletSection(path, bookName, i, sections[i].section_id);
  }
}
async function getbookletSection(path, bookName, index, section_id) {
  const body = { section_id: section_id };
  const config = getConfig("/booklet_api/v1/section/get", body);
  const { data } = await axios.request(config);
  const section = data.data.section;
  const title = formatTitle(section.title);
  fs.writeFile(`${path}/${index + 1}.${title}.md`, section.content, (err) => {
    if (err) throw err;
    console.log(`${bookName}-${index + 1}.${title}  写入成功`);
  });
}

async function main() {
  fs.mkdir("books", () => { });
  await getBooks();
}
main();
