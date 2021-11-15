const path = require("path");
const {catalog, getInput, readFile, jsonContent, rl} = require('./dataModule');
const dirPath = path.resolve(__dirname, "data");
const filePath = path.resolve(dirPath, "data.json");
const file = readFile(filePath);
let content = file && JSON.parse(file) || [];

async function changeProduct() {
    console.log("Введите ID изменяемого товара");
    let answer = await getInput(rl);
    if (answer < 0) {
        console.log("Невозможно изменить то, чего не существует, давай попробуем еще разок?");
    } else if (answer > content.length) {
        console.log("Невозможно изменить то, чего не существует, давай попробуем еще разок? Для измения товара выберите соответствующую команду в главном меню.")
    } else {
        console.log("Введите наименование нового товара");
        let product = await getInput(rl);
        console.log("Введите кол-во нового товара");
        let count = await getInput(rl);
        console.log("Введите цену нового товара");
        let price = await getInput(rl);

        let newProductData = ({
            product: product,
            count: count,
            price: price
        });

        catalog[answer] = newProductData;
        content = [...catalog];
        jsonContent(content);
        console.log('Товар изменен');
    }
}


module.exports = {
    changeProduct
}