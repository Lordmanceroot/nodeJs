
const path = require("path");
const {catalog, getInput, readFile, jsonContent, rl} = require('./dataModule');
const {viewCatalog} = require("./viewCatalog");
const dirPath = path.resolve(__dirname, "data");
const filePath = path.resolve(dirPath, "data.json");
const file = readFile(filePath);
let content = file && JSON.parse(file) || [];

async function deleteProduct() {

    let answer = await getInput(rl);
    delete catalog[answer];
    content = [...catalog];
    jsonContent(content);
    viewCatalog()
}


module.exports = {
    deleteProduct
}