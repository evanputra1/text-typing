// Menyeleksi elemen
const dynamicText = document.querySelector("span");
const words = ["College Student", "Web Designer", "Web Developer", "Frontend Developer"];

// Variabel untuk melacak posisi dan penghapusan kata
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blink");

    // Jika kondisi adalah true, ketik karakter selanjutnya
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } 
    
    // Jika kondisi adalah true, hapus karakter sebelumnya
    else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    }

    // Jika kata sudah dihapus lalu ganti ke kata selanjutnya
    else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blink");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();