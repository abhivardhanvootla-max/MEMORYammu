const PASSWORD = "11-01-2026";

const cards = [
  {
    image: "images/1.jpg",
    text: "YOUR FIRST DESCRIPTION ❤️"
  },
  {
    image: "images/2.jpg",
    text: "YOUR SECOND DESCRIPTION 💕"
  },
  {
    image: "images/3.jpg",
    text: "YOUR THIRD DESCRIPTION 🌸"
  },
  {
    image: "images/4.jpg",
    text: "YOUR FOURTH DESCRIPTION ✨"
  },
  {
    image: "images/5.jpg",
    text: "YOUR FIFTH DESCRIPTION 💖"
  },
  {
    image: "images/6.jpg",
    text: "YOUR SIXTH DESCRIPTION 🌹"
  },
  {
    image: "images/7.jpg",
    text: "YOUR SEVENTH DESCRIPTION 😊"
  },
  {
    image: "images/8.jpg",
    text: "YOUR EIGHTH DESCRIPTION ♾️"
  }
];

let index = 0;

function unlock() {
  const input = document.getElementById("password").value;
  if (input === PASSWORD) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    showCard();
  } else {
    document.getElementById("error").innerText = "Wrong password 💔";
  }
}

function showCard() {
  const img = document.getElementById("photo");
  const txt = document.getElementById("text");
  const card = document.querySelector(".card");

  // reset animation
  card.classList.remove("card-animate");
  void card.offsetWidth;
  card.classList.add("card-animate");

  img.src = cards[index].image;
  txt.innerText = cards[index].text;
}

function next() {
  if (index < cards.length - 1) {
    index++;
    showCard();
  }
}

function prev() {
  if (index > 0) {
    index--;
    showCard();
  }
}
