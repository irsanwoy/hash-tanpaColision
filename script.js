// Mendapatkan referensi elemen pada halaman web
const keyInput = document.getElementById('key-input');
const submitBtn = document.getElementById('submit-btn');
const resultTable = document.getElementById('result-table').getElementsByTagName('tbody')[0];

// Mendefinisikan konstanta untuk jumlah lokasi memori
const m = 11;

// Fungsi untuk menghitung nilai hash
function hash(k) {
  return k % m;
}

// Menambahkan event listener untuk tombol "Hash"
submitBtn.addEventListener('click', function() {
  // Mendapatkan nilai kunci dari input
  const key = parseInt(keyInput.value);
  
  // Menghitung nilai hash
  const hashedKey = hash(key);
  
  // Menambahkan baris pada tabel untuk menampilkan hasil
  const newRow = resultTable.insertRow(-1);
  const keyCell = newRow.insertCell(0);
  const hashCell = newRow.insertCell(1);
  keyCell.innerText = key;
  hashCell.innerText = hashedKey;
});
