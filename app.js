const matrix = document.querySelector(".matrix");

const makeId = () => {
    let result = "";
    let characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&é"'(§èè!çà)°-_$*¥#Ó"`;
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    return result;
};

const generateText = () => {
    const w = 10;
    const h = 25;

    for (let i = 0; i < w; i++) {
        const timeout = Math.floor(Math.random() * 10) * 1000;
        let delay = 0;

        const column = document.createElement("p");

        for (let i = 0; i < h; i++) {
            const letter = document.createElement("span");
            letter.innerHTML = makeId();
            column.appendChild(letter);

            delay += 100;
            column.children[i].style.animationDelay = delay + "ms";
        }
        setTimeout(() => {
            matrix.appendChild(column);
        }, timeout);
    }
};

generateText();
