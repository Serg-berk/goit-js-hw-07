const fontSize = document.getElementById(`font-size-control`)
const text = document.getElementById(`text`)

fontSize.addEventListener(`input`, e => {
    const size = fontSize.value;
    console.log(size);
    text.style.fontSize = `${size}px`;
});

// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн - стиль span#text 
// обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>