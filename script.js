const PASSWORD = "11-01-2026";

const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
  "images/img8.jpg"
];

const texts = [
  "Your first romantic message ❤️",
  "Second memory description 💕",
  "Third beautiful moment 🌸",
  "Fourth lovely memory ✨",
  "Fifth sweet feeling 💖",
  "Sixth unforgettable time 🌹",
  "Seventh smile moment 😊",
  "Eighth forever memory ♾️"
];

let index = 0;

function unlock() {
  const input = document.getElementById("password").value;
  if (input === PASSWORD) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "Wrong password 💔";
  }
}

function update() {
  const img = document.getElementById("photo");
  const txt = document.getElementById("text");

  img.src = images[index];
  txt.innerText = texts[index];

  txt.classList.remove("fade");
  void txt.offsetWidth;
  txt.classList.add("fade");
}

function next() {
  if (index < images.length - 1) {
    index++;
    update();
  }
}

function prev() {
  if (index > 0) {
    index--;
    update();
  }
}
