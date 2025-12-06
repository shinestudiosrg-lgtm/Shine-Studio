const prices = {
    fotobox: {
        "Basic": 10000,
        "Premium": 20000,
        "Gold": 25000
    },
    fotostudio: {
        "Basic": 15000,
        "Premium": 25000,
        "Gold": 35000,
        "Special Bundling": 80000,
        "Special Group": 150000,
        "Special Family": 200000
    }
};

function updatePackage() {
    const kategori = document.getElementById("kategori").value;
    const paket = document.getElementById("paket");

    paket.innerHTML = '<option value="">-- pilih paket --</option>';

    if (kategori === "fotobox") {
        Object.keys(prices.fotobox).forEach(p => {
            paket.innerHTML += `<option value="${p}">${p}</option>`;
        });
    } 
    else if (kategori === "fotostudio") {
        Object.keys(prices.fotostudio).forEach(p => {
            paket.innerHTML += `<option value="${p}">${p}</option>`;
        });
    }
}

function updatePrice() {
    updateTotal();
}

function updateTotal() {
    const kategori = document.getElementById("kategori").value;
    const paket = document.getElementById("paket").value;
    const jumlah = Number(document.getElementById("jumlah").value);

    let price = 0;

    if (kategori && paket) {
        price = prices[kategori][paket];
    }

    document.getElementById("total").innerText = (price * jumlah).toLocaleString("id-ID");
}
