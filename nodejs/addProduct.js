const {catalog, getInput, readFile, jsonContent, rl} = require('./dataModule');
const path = require("path");
const dirPath = path.resolve(__dirname, "data");
const filePath = path.resolve(dirPath, "data.json");
const file = readFile(filePath)
let content = file && JSON.parse(file) || [];

async function addProduct() {

    console.log("Введите название товара");
    let product = await getInput(rl);
    console.log("Введите кол-во товара");
    let count = await getInput(rl);

    while (+count <= 0 || isNaN(+count)) {
        console.log("Введите число больше 0")
        count = await getInput(rl)
    }

    console.log("Введите стоимость товара");
    let price = await getInput(rl);

    while (+price <= 0 || isNaN(+price)) {
        console.log("Введите число больше 0")
        price = await getInput(rl)
    }


    catalog.push({
        product: product,
        count: +count,
        price: +price
    });
    content = [...catalog];
    jsonContent(content);
}

module.exports = {
    addProduct
}
