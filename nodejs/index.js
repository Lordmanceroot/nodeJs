const {addProduct} = require('./addProduct');
const {viewCatalog} = require('./viewCatalog');
const {deleteProduct} = require('./deleteProduct');
const {changeProduct} = require('./changeProduct');
const {rl} = require('./dataModule');


askQuestion();

async function askQuestion () {
    console.log(
        " 0.    Выход       \n" +
        " 1. Список товаров \n" +
        " 2. Добавить товар \n" +
        " 3. Удалить товар  \n" +
        " 4. Изменить товар \n");

    rl.question('Выберите действие из списка, указанного выше: ', (answer) => {
        manageAnswer(`${answer}`);
    })
}

async function manageAnswer(answer) {

    switch (parseInt(answer)) {
        case 0:
            rl.close();
            break;

        case 1:
            await viewCatalog();
            askQuestion();
            break;

        case 2:
            console.log('Добавление товара\n');
            await addProduct();
            console.log('Товар добавлен');
            askQuestion();
            break;

        case 3:
            console.log('Удаление товара по ID\n');
            await deleteProduct();
            askQuestion();
            break;

        case 4:
            console.log('Изменение товара\n');
            await changeProduct();
            askQuestion();
            break;

        default:
            console.log('Невозможно выполнить действие, которого не существует');
            rl.close();
    }
}


