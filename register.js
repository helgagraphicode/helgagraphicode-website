// register.js
function submitForm() {
  // Collect form data
  const formData = {
    nama: document.getElementById('nama').value,
    email: document.getElementById('email').value,
    idDiscord: document.getElementById('idDiscord').value,
    nomorHp: document.getElementById('nomorHp').value,
    paket: document.querySelector('input[name="paket"]:checked').value,
    metodePembayaran: document.querySelector('input[name="metodePembayaran"]:checked').value
  };

  // You can add additional logic to handle form submission, send data to Discord webhook, etc.
  console.log('Form Data:', formData);
}

// Event listeners to show/hide elements based on user selection
document.getElementById('paketA').addEventListener('change', function() {
  document.getElementById('hargaKeterangan').style.display = this.checked ? 'block' : 'none';
  document.getElementById('harga').value = 'Harga Paket A';  // Set the actual price
  document.getElementById('keterangan').value = 'Keterangan Paket A';  // Set the actual description
});

document.getElementById('paketB').addEventListener('change', function() {
  document.getElementById('hargaKeterangan').style.display = this.checked ? 'block' : 'none';
  document.getElementById('harga').value = 'Harga Paket B';  // Set the actual price
  document.getElementById('keterangan').value = 'Keterangan Paket B';  // Set the actual description
});

document.getElementById('bankTransfer').addEventListener('change', function() {
  document.getElementById('bankDetails').style.display = this.checked ? 'block' : 'none';
  document.getElementById('qrisCode').style.display = 'none';
  document.getElementById('namaRekening').value = 'Nama Rekening Bank';  // Set the actual name
  document.getElementById('nomorRekening').value = 'Nomor Rekening Bank';  // Set the actual account number
});

document.getElementById('qris').addEventListener('change', function() {
  document.getElementById('qrisCode').style.display = this.checked ? 'block' : 'none';
  document.getElementById('bankDetails').style.display = 'none';
  // Set the actual QR Code URL
  document.getElementById('qrisImage').src = 'https://example.com/qrcode.jpg';
});
