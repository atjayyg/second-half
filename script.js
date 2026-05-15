const title = document.querySelector(".title");
console.log(title);

const words  = title.textContent.split(" ");
console.log(words);

title.textContent = "";

for (let i = 0; i <words.length; i++){
    const span = document.createElement("span");
    span.classList.add("word");
    span.textContent = words[i];
    span.style.animationDelay = (i + 1) * 0.5 + "s";
    title.appendChild(span);
    title.appendChild(document.createTextNode(" "));
}