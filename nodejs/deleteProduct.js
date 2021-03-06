
const path = require("path");
const {catalog, getInput, readFile, jsonContent, rl} = require('./dataModule');
const dirPath = path.resolve(__dirname, "data");
const filePath = path.resolve(dirPath, "data.json");
const file = readFile(filePath);
let content = file && JSON.parse(file) || [];

async function deleteProduct() {
    let answer = await getInput(rl);

    while (answer < 0 || answer > content.length) {
        console.log("Невозможно удалить то, чего не существует, давай попробуем еще разок?");
        answer = await getInput(rl);
    }

        catalog.splice(answer, 1)
        content = [...catalog];
        jsonContent(content);
        console.log('Товар удален');

}

module.exports = {
    deleteProduct
}