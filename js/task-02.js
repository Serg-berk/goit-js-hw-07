const ingredients = [
'Картошка',
'Грибы',
'Чеснок',
'Помидоры',
'Зелень',
'Приправы',
];

const itemList = document.querySelector(`#ingredients`)


const elements = ingredients.map(ingredient => {
    const elem = document.createElement(`li`)
elem.textContent = ingredient
    return elem;
    
})
itemList.append(...elements)

// const elem = document.createElement(`li`)
// console.log(elem);


// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>

// В JS есть массив строк.
// const ingredients = [
// 'Картошка',
// 'Грибы',
// 'Чеснок',
// 'Помидоры',
// 'Зелень',
// 'Приправы',
// ];

// Напиши скрипт, 
// который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().