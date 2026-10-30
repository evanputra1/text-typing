// Menyeleksi elemen
const dynamicText = document.querySelector(".typing-text");
const words = ["College Student", "Web Designer", "Web Developer", "Frontend Developer"];

// Guard: kalau elemen target tidak ada, script berhenti dengan pesan jelas
// (sebelumnya langsung error "Cannot set properties of null").
if (!dynamicText) {
    console.error('Elemen ".typing-text" tidak ditemukan di halaman.');
} else {
    // Variabel untuk melacak posisi dan penghapusan kata
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Kursor berhenti berkedip selama mengetik / menghapus
    const setTypingCursor = (isTyping) => {
        dynamicText.classList.toggle("stop-blink", isTyping);
    };

    const typeEffect = () => {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        dynamicText.textContent = currentChar;

        // Jika kondisi adalah true, ketik karakter selanjutnya
        if (!isDeleting && charIndex < currentWord.length) {
            setTypingCursor(true);
            charIndex++;
            setTimeout(typeEffect, 100);
        }

        // Jika kondisi adalah true, hapus karakter sebelumnya
        else if (isDeleting && charIndex > 0) {
            setTypingCursor(true);
            charIndex--;
            setTimeout(typeEffect, 100);
        }

        // Jika kata sudah dihapus lalu ganti ke kata selanjutnya
        else {
            isDeleting = !isDeleting;
            setTypingCursor(false);

            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }

            setTimeout(typeEffect, 1000);
        }
    };

    typeEffect();
}
