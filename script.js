// DATA DATA SATWA (Diambil langsung dari materi BioMon Nusantara Anda)
const dataSatwa = {
  anoa: {
    title: "🦬 Anoa",
    badgeEndemik: "Satwa Endemik Sulawesi",
    badgeClass: "Mamalia Kecil",
    desc: "Anoa adalah mamalia kecil yang hidup di hutan pegunungan Sulawesi. Ia memiliki tubuh yang kuat, kaki pendek, dan bisa berlari dengan cepat di area berbatu.",
    fact: "Anoa termasuk hewan endemik Indonesia dan sangat berperan dalam menjaga keseimbangan ekosistem hutan.",
    profText: "Hebat! Kamu sedang melihat Anoa. Jangan lupa jawab mini kuis di bawah untuk menguji pengetahuanmu!"
  },
  harimau: {
    title: "🐅 Harimau",
    badgeEndemik: "Predator Kuat di Hutan Nusantara",
    badgeClass: "Karnivora",
    desc: "Harimau memiliki tubuh yang lentur dan cakar tajam. Ia adalah predator puncak yang membantu mengontrol jumlah hewan mangsa di hutan.",
    fact: "Harimau Sumatra adalah subspesies harimau yang hidup di Indonesia dan kini termasuk satwa yang sangat dilindungi.",
    profText: "Hati-hati, ini dia sang Harimau, si predator puncak pelindung keseimbangan hutan!"
  },
  orangutan: {
    title: "🦧 Orangutan",
    badgeEndemik: "Pintar dan Cerdas di Hutan Tropis",
    badgeClass: "Primata",
    desc: "Orangutan adalah primata besar yang sangat cerdas. Mereka suka memanjat, mencari buah, dan hidup di pohon yang tinggi di hutan hujan.",
    fact: "Orangutan Indonesia tinggal di Kalimantan dan Sumatra serta sangat penting untuk menjaga kelestarian hutan hujan.",
    profText: "Lihatlah ke atas pohon! Orangutan yang cerdas sedang mengintip petualangan kita."
  }
};

// SISTEM PINDAH SATWA SECARA DINAMIS
const buttons = document.querySelectorAll('.btn-satwa');
const profText = document.getElementById('prof-text');
const satwaTitle = document.querySelector('.satwa-header h3');
const badgeEndemik = document.querySelector('.badge-endemik');
const badgeClass = document.querySelector('.badge-class');
const satwaDesc = document.querySelector('.satwa-desc');
const factText = document.querySelector('.fact-box p');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    // 1. Ubah visual tombol aktif
    buttons.forEach(btn => btn.classList.remove('active-btn'));
    this.classList.add('active-btn');
    
    // 2. Ambil ID satwa yang diklik (anoa / harimau / orangutan)
    const satwaKey = this.getAttribute('data-satwa');
    const data = dataSatwa[satwaKey];
    
    if (data) {
      // 3. Update isi konten secara instan tanpa reload halaman
      satwaTitle.textContent = data.title;
      badgeEndemik.textContent = data.badgeEndemik;
      badgeClass.textContent = data.badgeClass;
      satwaDesc.textContent = data.desc;
      factText.textContent = data.fact;
      profText.textContent = data.profText;
    }
  });
});

// SISTEM MINI KUIS & SKOR
let skor = 0;
const scoreDisplay = document.getElementById('player-score');
const quizButtons = document.querySelectorAll('.opt-btn');

function checkAnswer(isCorrect) {
  // Reset semua warna tombol kuis terlebih dahulu
  quizButtons.forEach(btn => {
    btn.style.background = '#ffffff';
    btn.style.borderColor = '#e2e8f0';
    btn.style.color = '#475569';
    btn.disabled = true; // Kunci tombol setelah menjawab
  });

  // Cari tahu tombol mana yang diklik pengguna
  const clickedButton = event.target;

  if (isCorrect) {
    clickedButton.style.background = '#edf7ed';
    clickedButton.style.borderColor = '#4caf50';
    clickedButton.style.color = '#2e7d32';
    
    // Tambah skor dan update layarnya
    skor += 10;
    scoreDisplay.textContent = skor;
    profText.textContent = "Jawabanmu BENAR! Selamat, skor kamu bertambah +10! 🎉";
  } else {
    clickedButton.style.background = '#fde8e8';
    clickedButton.style.borderColor = '#f44336';
    clickedButton.style.color = '#c62828';
    
    profText.textContent = "Aduh, jawabannya kurang tepat. Yuk, baca lagi fakta satwanya di atas! 💡";
  }
}
// SISTEM TOMBOL KEMBALI KE MENU
const btnKembali = document.getElementById('btn-kembali');

btnKembali.addEventListener('click', function() {
  // 1. Kembalikan teks sambutan Profesor Celepuk ke awal
  profText.textContent = "Selamat datang, petualang! Pilih salah satu gerbang satwa di bawah untuk memulai penjelajahan ekosistem kita.";
  
  // 2. Reset status tombol pilihan satwa agar tidak ada yang terpilih secara visual
  buttons.forEach(btn => btn.classList.remove('active-btn'));
  
  // 3. Kembalikan konten detail satwa ke tampilan default awal (Anoa)
  satwaTitle.textContent = "🦬 Anoa";
  badgeEndemik.textContent = "Satwa Endemik Sulawesi";
  badgeClass.textContent = "Mamalia Kecil";
  satwaDesc.textContent = "Anoa adalah mamalia kecil yang hidup di hutan pegunungan Sulawesi. Ia memiliki tubuh yang kuat, kaki pendek, dan bisa berlari dengan cepat di area berbatu.";
  factText.textContent = "Anoa termasuk hewan endemik Indonesia dan sangat berperan dalam menjaga keseimbangan ekosistem hutan.";
  
  // 4. Reset tampilan mini kuis agar bisa dimainkan kembali
  quizButtons.forEach(btn => {
    btn.style.background = '#ffffff';
    btn.style.borderColor = '#e2e8f0';
    btn.style.color = '#475569';
    btn.disabled = false; // Membuka kembali kunci tombol kuis
  });
});
// Hubungkan fungsi kuis agar bisa dibaca dari HTML global
window.checkAnswer = checkAnswer;
