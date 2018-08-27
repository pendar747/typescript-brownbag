const nameInput = document.createElement('input');
const greetings = document.createElement('div');
const div2 = document.createElement('div');

function updateName (this: HTMLInputElement, event: Event) {
    const name = this.value;
    greetings.innerHTML = `Hello ${name}!`;
    div2.innerHTML = `Your name has ${name.length} letters.`;
}

nameInput.addEventListener('keyup', updateName);

const appendElements = (elements: HTMLElement[]) => {
    elements.forEach(el => document.body.appendChild(el));
}

appendElements([nameInput, greetings, div2]);