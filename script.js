const PASSWORD = "11-01-2026";

const cards = [
  {
    image: "images/img1.jpg",
    text: "Hi ammulu today is 11th Jan 2025
Today I m very Happy With You And A little bit having pain too. Which was I have to ass far as long time .
Kani e roju ni matram a roju kuuda marichi ponu ammulu.
Even vache varaku kuuda nenu ntha excitement tho unna ani naaku telsu neeku ntha undho leedho naaku NUV vache varaku kuuda telidhu.Vachi kurchunnaka kuuda normal gha unnav.
I m not really happy with that kani , adho chinna hope nuv happy gah unnav ani ledha m ayna feeling expres cheyyadaniki vachav ani. ❤️"
  },
  {
    image: "images/img2.jpg",
    text: "Nenu aythe ntho try cheina ni hand hold cheyyadaniki 🥺 because i really misss you untill that I missed you how much can I even express .

Na eyes lo ntha water antte ni side chusthe akkada kindhiki vachesthayo ani bayam.,Manaku thoodu vaadu okkadu mana gandaniki anipinchindhi. 💕"
  },
  {
    image: "images/img3.jpg",
    text: "But ni hand touch chesaka na lo Anni thoughts unnayo telsa 🥺 ninnu ntha miss ayyano Anni sarlu ninnu gurthu thechukunnano telsa even you can't imagine ammulu 🥲

Ega last ki vaadu velli poynaka naaku ntha happy antte antha happy anipinchindhi anduke ega ni hand hold chesi pattukunna antha seepu aythe ninnu pattukoni unnano antha seepu na mind lo chaala thoughts run aynayi.🥹 🌸"
  },
  {
    image: "images/img4.jpg",
    text: "But it's a beautiful beautiful beautiful memory,Nuv ntha gattiga hold chesthunnavo feel aynaka 
Naaku ardham ayindhi "edhi intha nannu miss avthundha ani " ✨"
  },
  {
    image: "images/img5.jpg",
    text: "I m really get into emotional but at a time sharma unnadu anduke express cheyya ledhu.

Nuv pic dhigudham ani hand pattukunnapudu na happiness nuv even imagine cheyyalev telsa 🥺 

Ala nanu nuvvu hold cheska all my thoughts are thrown into dustbin. 💖"
  },
  {
    image: "images/img6.jpg",
    text: "And aa pics dhiguthunantha seepu nuv ala hand hold chesina antha seepu I m went into trans.. 🌹"
  },
  {
    image: "images/img7.jpg",
    text: "And edhi main nuv na shoulder pi padukunnav even I didn't expect this naaku inkka aaa minute ala antte akkade struck aypoyna telsa 🥺 really i missed you a lot ammulu. 

Nuv dhagara unnapudu teliya ledhu kani 
Nuv dhooram vellaka nenu ntha bayapadda ntha bhadha padda ntha kastam gah unna 🥹

But finnally nuv Eroju vachav I m so happy for it and I m so so so wondered to you 😊"
  },
  {
    image: "images/img8.jpg",
    text: "And chaala misunderstandings vadili ni kosam vasthunna hyd ki. kasniam e journey ayna manaku memorable day avvali ani.AND AT LAST I WILL PROMISE YOU I WONT LEAVE YOUR HANDS AND I EILL RESPECT YOUR DECISIONS AND YOU ARE ALWAYS CLOSE TO MY HEART AMMULU LOVE YOU💕 I REALLY NEED YOU 🥲😚😚😚♾️"
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
