
// TYPEWRITER + DELETE EFFECT

(function () {
    const el = document.getElementById("animated-text");
    if (!el) return;

    const words = ["PYTHONIST", "DEVELOPER", "DATA STORYTELLER", "LEARNER"];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
            // typing forward
            el.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1200); 
                return;
            }
        } else {
            // 
            el.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        const speed = isDeleting ? 60 : 120;
        setTimeout(typeEffect, speed);
    }

    
    window.addEventListener("load", () => {
        setTimeout(typeEffect, 500);
    });
})();



// MOBILE MENU

function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    if (!menu) return;
    menu.classList.toggle("hidden");
}



// CERT MODAL

function openCertModal() {
    const modal = document.getElementById("certModal");
    if (!modal) return;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeCertModal() {
    const modal = document.getElementById("certModal");
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}

function loadCert(file) {
    const viewer = document.getElementById("certViewer");
    if (viewer) viewer.src = file;
}



// RESUME

function openResume() {
    window.open("resume.pdf", "_blank");
}
