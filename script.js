// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to move the NO btn
noBtn.addEventListener("mouseover", () => {
    const letterWindow = document.querySelector(".letter-window");
    const windowRect = letterWindow.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    const safeWidth = windowRect.width * 0.6;
    const safeHeight = windowRect.height * 0.5;
    
    const maxMoveX = (safeWidth - btnRect.width) / 2 - 30;
    const maxMoveY = (safeHeight - btnRect.height) / 2 - 30;
    
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 60 + 40;
    
    let moveX = Math.cos(angle) * distance;
    let moveY = Math.sin(angle) * distance;
    
    moveX = Math.max(-maxMoveX, Math.min(maxMoveX, moveX));
    moveY = Math.max(-maxMoveY, Math.min(maxMoveY, moveY));

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES is clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    catImg.src = "cat_dance.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
});
