
const giftButton = document.getElementById("gift-button");
const giftMessage = document.getElementById("gift-message");

giftButton.addEventListener("click", function () {
  giftMessage.classList.toggle("show");

  if (giftMessage.classList.contains("show")) {
    giftButton.textContent = "💗 Your surprise is open!";
    giftMessage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    createFlowers();
  } else {
    giftButton.textContent = "🎁 Open Your Gift";
  }
});

// Floating flower petals
function createFlowers() {
  for (let i = 0; i < 18; i++) {
    const flower = document.createElement("div");

    flower.textContent = ["🌸", "🌷", "💗", "🪻"][
      Math.floor(Math.random() * 4)
    ];

    flower.style.position = "fixed";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.top = "-40px";
    flower.style.fontSize = Math.random() * 15 + 18 + "px";
    flower.style.pointerEvents = "none";
    flower.style.zIndex = "999";
    flower.style.transition =
      "top 4s linear, transform 4s linear, opacity 4s linear";

    document.body.appendChild(flower);

    requestAnimationFrame(() => {
      flower.style.top = "105vh";
      flower.style.transform =
        `rotate(${Math.random() * 720}deg)`;
      flower.style.opacity = "0";
    });

    setTimeout(() => {
      flower.remove();
    }, 4200);
  }
}

// Background music control
const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-button");

musicButton.addEventListener("click", async function () {
  if (music.paused) {
    try {
      await music.play();
      musicButton.textContent = "❚❚ Pause";
    } catch (error) {
      musicButton.textContent = "Music unavailable";
      alert("Please add your song as song.mp3 in the website folder.");
    }
  } else {
    music.pause();
    musicButton.textContent = "▶ Play";
  }
});

// Reveal sections as the user scrolls
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.1
});

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  observer.observe(section);
});
