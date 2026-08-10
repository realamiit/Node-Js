const texts = ["Web Developer", "BCA Student", "Probleam Solver"];
let textIndex = 0;
let charIndex = 0;
const typewriterEl = document.getElementById('typewriter');

function type() {
    if(charIndex < texts[textIndex].length){
        typewriterEl.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);

    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterEl.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    }else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    }
}

type();