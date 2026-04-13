const words = [
  "Pythonist",
  "Quantitative Thinker",
  "Developer",
  "Researcher",
  "Data Storyteller"
];

const animatedText = document.getElementById("animated-text");
let wordIndex = 0;
let charIndex = 0;
let typing = true;

function type() {
    const currentWord = words[wordIndex];

    if (typing) {
        animatedText.textContent = currentWord.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            typing = false;
            setTimeout(type, 1000); // Wait before deleting
        } else {
            setTimeout(type, 150); // Typing speed
        }
    } else {
        animatedText.textContent = currentWord.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            typing = true;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500); // Pause before typing next word
        } else {
            setTimeout(type, 100); // Deleting speed
        }
    }
}

type();









function openCertModal() {
    const modal = document.getElementById('certModal');

    modal.classList.add('show');
    loadCert('./certificates/cert1.pdf');

    const firstBtn = document.querySelector('.cert-btn');
    if (firstBtn) {
        document.querySelectorAll('.cert-btn').forEach(b => b.classList.remove('active'));
        firstBtn.classList.add('active');
    }
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    modal.classList.remove('show');
}

function loadCert(file) {
    document.getElementById('certViewer').src = file;
}

function selectCert(button, file) {

    document.querySelectorAll('.cert-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    button.classList.add('active');
    loadCert(file);
}






