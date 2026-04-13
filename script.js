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
    document.getElementById('certModal').classList.remove('hidden');
    document.getElementById('certModal').classList.add('flex');
    loadCert('certificates/cert1.pdf'); // load first PDF by default
}

function closeCertModal() {
    document.getElementById('certModal').classList.add('hidden');
    document.getElementById('certModal').classList.remove('flex');
}

function loadCert(file) {
    document.getElementById('certViewer').src = file;
}








