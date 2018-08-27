const phrases = ['Pendar', 'Panda', 'Robot Mouse', 'Magic 8 ball'];

const numSteps = 6;

const random = (start: number, end: number): number =>
    start + Math.floor(Math.random() * end);

const phrase = phrases[random(0, phrases.length)];
const letters = phrase.split('');

let guesses: string[] = [];
letters.forEach(letter => {
    if (letter !== ' ' && Math.random() < 0.7 && guesses.length < numSteps) {
        guesses.push(letter);
    }
})

const createLetter = (letter: string): HTMLSpanElement => {
    const el = document.createElement('span');
    el.innerHTML = letter;
    return el;
}

const createPlaceholder = (letter: string): HTMLSpanElement => {
    const el = document.createElement('span');
    el.setAttribute('data-letter', letter);
    el.innerHTML = '_';
    el.style.width = '40px';
    el.style.background = 'yellow';
    el.style.margin = '5px';
    el.style.padding = '4px';
    return el;
}

const els: HTMLElement[] = letters.map(letter =>
    guesses.indexOf(letter) !== -1
        ? createPlaceholder(letter)
        : createLetter(letter)
);

const wordEl = document.createElement('div');
document.body.appendChild(wordEl);
els.forEach(el => {
    wordEl.appendChild(el);
});

const inputEl = document.createElement('input');
const button = document.createElement('button');
const stepsLeftEl = document.createElement('div');
button.innerHTML = 'check';
stepsLeftEl.innerHTML = 'You have 6 guesses left.';
document.body.appendChild(inputEl);
document.body.appendChild(button);
document.body.appendChild(stepsLeftEl);

let step = 1;
const check = () => {
    if (step === numSteps) {
        alert(':( You have lost!!!');
    }
    els.forEach(el => {
        const letter = el.getAttribute('data-letter');
        if (letter === inputEl.value && el.innerHTML === '_') {
            el.style.background = 'lightgreen';
            el.innerHTML = letter;
        }
    });
    stepsLeftEl.innerHTML = `You have ${numSteps - step} guesses left.`;
    step += 1;
};
button.addEventListener('click', check);
inputEl.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        check();
    }
});