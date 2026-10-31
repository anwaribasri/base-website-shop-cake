const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        card.classList.toggle("dipilih");
    });
});


const menu = {
  "brownis ketan keju": {
    nama: "Brownis Ketan Keju",
    harga: 50000,
    jumlah: 0,
    id: "brownis"
  },
  "Pie buah": {
    nama: "Pie Buah",
    harga: 25000,
    jumlah: 0,
    id: "pie"
  },
  "hampers": {
    nama: "Hampers",
    harga: 100000,
    jumlah: 0,
    id: "hampers"
  },
  "kue putri salju": {
    nama: "Kue Putri Salju",
    harga: 65000,
    jumlah: 0,
    id: "putrisalju"
  },
  "Kue sagu keju": {
    nama: "Kue Sagu Keju",
    harga: 65000,
    jumlah: 0,
    id: "sagukeju"
  },
  "Kue nastar": {
    nama: "Kue Nastar",
    harga: 70000,
    jumlah: 0,
    id: "nastar"
  },
  "Snack box": {
    nama: "Snack Box",
    harga: 120000,
    jumlah: 0,
    id: "snackbox"
  },
  "pudding cokelat": {
    nama: "Pudding Cokelat",
    harga: 20000,
    jumlah: 0,
    id: "pudding"
  }
};

function ubahJumlah(nama, angka) {
  if (!menu[nama]) {
    console.error("Menu tidak ditemukan:", nama);
    return;
  }

  menu[nama].jumlah += angka;

  if (menu[nama].jumlah < 0) {
    menu[nama].jumlah = 0;
  }

  const elemenJumlah = document.getElementById(
    "jumlah-" + menu[nama].id
  );

  elemenJumlah.textContent = menu[nama].jumlah;

  hitungTotal();
}

function hitungTotal() {
  let total = 0;

  for (const nama in menu) {
    total += menu[nama].harga * menu[nama].jumlah;
  }

  document.getElementById("total").textContent =
    "Rp" + total.toLocaleString("id-ID");
}


function pesanSekarang() {
  const nomorWhatsapp = "6281808806643"; //

  let total = 0;
  let ringkasan = "HALO, ADA PESANAN KUE BARU! 🍰\n\n";
  let adaPesanan = false;

  for (const nama in menu) {
    const produk = menu[nama];

    if (produk.jumlah > 0) {
      adaPesanan = true;

      const subtotal = produk.harga * produk.jumlah;
      total += subtotal;

      ringkasan +=
        produk.nama + " x " + produk.jumlah +
        " = Rp" + subtotal.toLocaleString("id-ID") + "\n";
    }
  }

  if (!adaPesanan) {
    alert("Pilih minimal satu menu dulu, ya!");
    return;
  }

  ringkasan +=
    "\nTOTAL PESANAN: Rp" +
    total.toLocaleString("id-ID");

  ringkasan += "\n\nMohon konfirmasi pesanan ini. Terima kasih!";

  const linkWhatsApp =
    "https://wa.me/" + nomorWhatsapp +
    "?text=" + encodeURIComponent(ringkasan);

  window.open(linkWhatsApp, "_blank");
}



