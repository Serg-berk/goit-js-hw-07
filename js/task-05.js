const refs = {
    input : document.querySelector('#name-input'),
    output : document.querySelector('#name-output')
}
refs.input.addEventListener('input', onInputEnter);

function onInputEnter(event) {
    refs.output.textContent = event.currentTarget.value
    console.log(refs.output.textContent);
    if (refs.output.textContent.length < 1) {
        refs.output.textContent = 'незнакомец'
    }
        
}


// Напиши скрипт который,
// при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>