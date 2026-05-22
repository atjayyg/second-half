const title = document.querySelector(".title");
console.log(title);

const words = title.textContent.split(" ");
console.log(words);

title.textContent = "";

for (let i = 0; i < words.length; i++) {
    const span = document.createElement("span");
    span.classList.add("word");
    span.textContent = words[i];
    span.style.animationDelay = (i + 1) * 0.5 + "s";
    title.appendChild(span);
    title.appendChild(document.createTextNode(" "));
}

const beginBtn = document.getElementById("begin-btn")
beginBtn.addEventListener("click", function () {
    document.getElementById("intro").classList.remove("active")
    document.getElementById("ch1").classList.add("active")
})

document.getElementById("gallery-btn").addEventListener("click", function () {
    window.location.href = "gallery.html"
})

document.getElementById("ch2-prev-btn").addEventListener("click", function () {
    window.location.href = "gallery.html"
})



const nextBtn = document.querySelectorAll(".next-btn")
const prevBtn = document.querySelectorAll(".prev-btn")

nextBtn.forEach(nextBtn => {
    nextBtn.addEventListener("click", function () {
        document.querySelector(".screen.active").classList.remove("active")
        document.getElementById(nextBtn.dataset.next).classList.add("active")
    })
});

prevBtn.forEach(prevBtn => {
    prevBtn.addEventListener("click", function () {
        document.querySelector(".screen.active").classList.remove("active")
        document.getElementById(prevBtn.dataset.prev).classList.add("active")
    })
})

const songCard = document.querySelectorAll(".song-card")
let currentSongCard = 1
document.getElementById("song-next").addEventListener("click", function () {
    currentSongCard ++
    currentSongCheck(currentSongCard)
    document.querySelector(".song-card.active").classList.remove("active")
    document.getElementById("ch2-song" + String(currentSongCard)).classList.add("active")
})

document.getElementById("song-prev").addEventListener("click", function() {
    currentSongCard --
    currentSongCheck(currentSongCard)
    document.querySelector(".song-card.active").classList.remove("active")
    document.getElementById("ch2-song" + String(currentSongCard)).classList.add("active")
})

function currentSongCheck(currentSongCard) {
    if (currentSongCard == 4) {
        document.getElementById("song-next").style.visibility = "hidden"
    }
    else {
        document.getElementById("song-next").style.visibility = "visible"
    }

    if (currentSongCard == 1) {
        document.getElementById("song-prev").style.visibility = "hidden"
    }
    else {
        document.getElementById("song-prev").style.visibility = "visible"

    }
}


if (window.location.hash === "#ch2") {
    document.getElementById("intro").classList.remove("active")
    document.getElementById("ch2").classList.add("active")
    history.replaceState(null, "", " ")
}

if (window.location.hash === "#ch1") {
    document.querySelector(".screen.active").classList.remove("active")
    document.getElementById("ch1").classList.add("active")
    history.replaceState(null, "", " ")
}

currentSongCheck(currentSongCard)