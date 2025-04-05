// MENGAMBIL DATA NAMA BARANG DAN HARGA BARANG DARI URL
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get("name");
const productPrice = urlParams.get("price");

const namaBarangInput = document.getElementById("namaBarang");
const jumlahInput = document.getElementById("jumlah");
const totalHargaDisplay = document.getElementById("totalHarga");

// MEMASUKKAN NAMA BARANG KE INPUT
if (productName) {
  namaBarangInput.value = productName;
}

// FUNGSI SBGAI HITUNG TOTAL BARANGNYA
function updateTotal() {
  const jumlah = parseInt(jumlahInput.value);
  const price = parseInt(productPrice?.replace(/[^\d]/g, "")) || 0;
  const total = jumlah * price;
  totalHargaDisplay.textContent = `Rp ${total.toLocaleString("id-ID")}`;
}

// AKAN MENGUPDATE TOTAL SETIAP KALI JUMLAH Y BERUBAH
jumlahInput.addEventListener("input", updateTotal);

// INISIALISASI SAAT HALAMAN PERTAMA KALI DIMUAT
updateTotal();

// FUNGSI UNTUK MERESET FORMNYA
function resetForm() {
  document.getElementById("purchaseForm").reset();
  // MEMASUKKAN KEMBALI NAMA SI BARANG SAAT SI RESET DI TEKAN
  namaBarangInput.value = productName || "";
  updateTotal();
}

// SAAT TOMBOL KIRIM DI TEKAN AKAN MUNCUL ALERT ATAU NOTIFIKASI BRO
document
  .getElementById("purchaseForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form berhasil dikirim!");
  });
