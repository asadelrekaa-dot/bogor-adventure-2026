// DATABASE ASLI 48 ANGGOTA SESUAI MATRIKS STRUKTUR TABEL TERBARU
const memberDatabase = [
    // --- KELOMPOK 1 ---
    { name: "Selvi Habibatur Rohmah", divisi: "Ketua Kelompok 1 (Rafting/Offroad)", piket: "-", rafting: "Kelompok 1 (Ketua)", offroad: "Kelompok 1 (Ketua)", mback: "Kelompok 3", kamar: "Kamar 1", gunung: "Kelompok 1" },
    { name: "Najla", divisi: "MC (Master of Ceremony)", piket: "-", rafting: "Kelompok 2", offroad: "Kelompok 1 (Ketua)", mback: "Kelompok 3", kamar: "Kamar 1", gunung: "Kelompok 4" },
    { name: "Fathimah", divisi: "Bakar Frozen Food", piket: "-", rafting: "Kelompok 8", offroad: "Kelompok 1", mback: "Kelompok 3", kamar: "Kamar 1", gunung: "Kelompok 2" },
    { name: "Nadilla Ramadhani", divisi: "Divisi Konsumsi", piket: "Siang Hari 2", rafting: "Kelompok 4", offroad: "Kelompok 4", mback: "Kelompok 2", kamar: "Kamar 1", gunung: "Kelompok 3" },
    { name: "Ami", divisi: "Divisi Konsumsi", piket: "Pagi Hari 3", rafting: "Kelompok 5", offroad: "Kelompok 5", mback: "Kelompok 2", kamar: "Kamar 1", gunung: "Kelompok 1 (Ketua)" },
    { name: "Putri Hafizah", divisi: "Bendahara / Dok. Foto Before After", piket: "-", rafting: "Kelompok 1", offroad: "Kelompok 1", mback: "Kelompok 1", kamar: "Kamar 1", gunung: "Kelompok 1" },

    // --- KELOMPOK 2 ---
    { name: "Fayyaza Kayla Arifah Manopo", divisi: "Ketua Mback Kelompok 3", piket: "Ketua Mobil Bak Kelompok 3", rafting: "Kelompok 7", offroad: "Kelompok 2", mback: "Kelompok 3 (Ketua)", kamar: "Kamar 2", gunung: "Kelompok 1" },
    { name: "Nadiyah Khoirunisa", divisi: "Divisi Konsumsi", piket: "Siang Hari 3", rafting: "Kelompok 6", offroad: "Kelompok 6", mback: "Kelompok 2", kamar: "Kamar 2", gunung: "Kelompok 3" },
    { name: "Zahiroh", divisi: "Bakar Frozen Food", piket: "-", rafting: "Kelompok 8", offroad: "Kelompok 4", mback: "Kelompok 3", kamar: "Kamar 2", gunung: "Kelompok 1" },
    { name: "Alika", divisi: "Divisi Kebersihan", piket: "-", rafting: "Kelompok 6", offroad: "Kelompok 7", mback: "Kelompok 2", kamar: "Kamar 2", gunung: "Kelompok 1" },
    { name: "Salma Hidayatus Sabila", divisi: "Bakar Frozen Food", piket: "-", rafting: "Kelompok 8", offroad: "Kelompok 3", mback: "Kelompok 3", kamar: "Kamar 2", gunung: "Kelompok 1" },
    { name: "Risha", divisi: "Ketua Kelompok 8 Rafting", piket: "Ketua Mobil Bak Kelompok 1", rafting: "Kelompok 8 (Ketua)", offroad: "Kelompok 1", mback: "Kelompok 1 (Ketua)", kamar: "Kamar 2", gunung: "Kelompok 5" },

    // --- KELOMPOK 3 ---
    { name: "Nadia Keisha Putri Aulia", divisi: "Ketua Kelompok 3 (Rafting/Offroad)", piket: "-", rafting: "Kelompok 3 (Ketua)", offroad: "Kelompok 3 (Ketua)", mback: "Kelompok 3", kamar: "Kamar 3", gunung: "Kelompok 1" },
    { name: "Ayu Aisya Somala", divisi: "Bakar Frozen Food", piket: "-", rafting: "Kelompok 7", offroad: "Kelompok 7", mback: "Kelompok 2", kamar: "Kamar 3", gunung: "Kelompok 5" },
    { name: "Zaro", divisi: "Divisi Acara", piket: "-", rafting: "Kelompok 1", offroad: "Kelompok 3", mback: "Kelompok 3", kamar: "Kamar 3", gunung: "Kelompok 4" },
    { name: "Arin", divisi: "Divisi Konsumsi", piket: "Malam Hari 1", rafting: "Kelompok 3", offroad: "Kelompok 3", mback: "Kelompok 1", kamar: "Kamar 3", gunung: "Kelompok 4" },
    { name: "Salwa", divisi: "Divisi Konsumsi", piket: "Pagi Hari 1", rafting: "Kelompok 3", offroad: "Kelompok 3", mback: "Kelompok 1", kamar: "Kamar 3", gunung: "Kelompok 5" },
    { name: "Nabila", divisi: "Anggota / Naik Kawah Ratu", piket: "-", rafting: "Kelompok 4", offroad: "Kelompok 6", mback: "Kelompok 3", kamar: "Kamar 3", gunung: "Kelompok 1" },

    // --- KELOMPOK 4 ---
    { name: "Futem", divisi: "Anggota", piket: "-", rafting: "Kelompok 5", offroad: "Kelompok 7", mback: "Kelompok 3", kamar: "Kamar 4", gunung: "Kelompok 4" },
    { name: "Aca", divisi: "Divisi Kebersihan", piket: "-", rafting: "Kelompok 7", offroad: "Kelompok 1", mback: "Kelompok 2", kamar: "Kamar 4", gunung: "Kelompok 1" },
    { name: "Diaz Anmru", divisi: "Komdigi", piket: "-", rafting: "Kelompok 2", offroad: "Kelompok 2", mback: "Kelompok 1", kamar: "Kamar 4", gunung: "Kelompok 5" },
    { name: "Kanya", divisi: "Bakar Frozen Food", piket: "Siang Hari 2 Kawah Ratu", rafting: "Kelompok 7", offroad: "Kelompok 7", mback: "Kelompok 2", kamar: "Kamar 4", gunung: "Kelompok 5" },
    { name: "Nafisa Aldawiyah Fauzi", divisi: "Divisi Konsumsi", piket: "Siang Hari 3", rafting: "Kelompok 5", offroad: "Kelompok 5", mback: "Kelompok 2", kamar: "Kamar 4", gunung: "Kelompok 3" },

    // --- KELOMPOK 5 ---
    { name: "Alifah", divisi: "Komdigi", piket: "-", rafting: "Kelompok 2", offroad: "Kelompok 2", mback: "Kelompok 1", kamar: "Kamar 5", gunung: "Kelompok 4" },
    { name: "Rizka Azzah Khoirunnisa", divisi: "Sekretaris / Divisi Kebersihan", piket: "-", rafting: "Kelompok 1", offroad: "Kelompok 1", mback: "Kelompok 1", kamar: "Kamar 5", gunung: "Kelompok 2 (Ketua)" },
    { name: "Naya", divisi: "Divisi Acara", piket: "-", rafting: "Kelompok 8", offroad: "Kelompok 2", mback: "Kelompok 2", kamar: "Kamar 5", gunung: "Kelompok 2" },
    { name: "Yulia Salsabila Putri Wijokongko", divisi: "Divisi Timekeeper", piket: "-", rafting: "Kelompok 4", offroad: "Kelompok 5", mback: "Kelompok 2", kamar: "Kamar 5", gunung: "Kelompok 3" },
    { name: "Ummul amalia", divisi: "Anggota", piket: "Ketua Mobil Bak Kelompok 2", rafting: "Kelompok 6", offroad: "Kelompok 1", mback: "Kelompok 2 (Ketua)", kamar: "Kamar 5", gunung: "Kelompok 6" },

    // --- KELOMPOK 6 ---
    { name: "Windy", divisi: "Ketua Kelompok 4 (Rafting/Offroad)", piket: "-", rafting: "Kelompok 4 (Ketua)", offroad: "Kelompok 4 (Ketua)", mback: "Kelompok 3", kamar: "Kamar 6", gunung: "Kelompok 4 (Ketua)" },
    { name: "Naimah", divisi: "Bakar Frozen Food", piket: "-", rafting: "Kelompok 8", offroad: "Kelompok 2", mback: "Kelompok 3", kamar: "Kamar 6", gunung: "Kelompok 3 (Ketua)" },
    { name: "Shofiyyah", divisi: "Divisi Konsumsi", piket: "Siang Hari 2", rafting: "Kelompok 5", offroad: "Kelompok 5", mback: "Kelompok 2", kamar: "Kamar 6", gunung: "Kelompok 3" },
    { name: "Naisya Asya", divisi: "Divisi Dok. Foto Before After", piket: "-", rafting: "Kelompok 5", offroad: "Kelompok 6", mback: "Kelompok 2", kamar: "Kamar 6", gunung: "Kelompok 2" },
    { name: "Sausan", divisi: "Divisi Timekeeper", piket: "-", rafting: "Kelompok 3", offroad: "Kelompok 4", mback: "Kelompok 1", kamar: "Kamar 6", gunung: "Kelompok 2" },

    // --- KELOMPOK 7 ---
    { name: "Alifah Zulfa Rahmi", divisi: "Ketua Kelompok 2 (Rafting/Offroad)", piket: "-", rafting: "Kelompok 2 (Ketua)", offroad: "Kelompok 2 (Ketua)", mback: "Kelompok 3", kamar: "Kamar 7", gunung: "Kelompok 4" },
    { name: "Anggun", divisi: "Ketua Kelompok 5 (Rafting/Offroad)", piket: "-", rafting: "Kelompok 5 (Ketua)", offroad: "Kelompok 5 (Ketua)", mback: "Kelompok 3", kamar: "Kamar 7", gunung: "Kelompok 2" },
    { name: "Marha Nabiila Putri", divisi: "Divisi Kesehatan", piket: "-", rafting: "Kelompok 1", offroad: "Kelompok 2", mback: "Kelompok 1", kamar: "Kamar 7", gunung: "Kelompok 2" },
    { name: "Naurah Khalisa Mukbitah", divisi: "Divisi Konsumsi", piket: "Pagi Hari 2", rafting: "Kelompok 4", offroad: "Kelompok 4", mback: "Kelompok 1", kamar: "Kamar 7", gunung: "Kelompok 3" },
    { name: "Ratuuuu", divisi: "Divisi Konsumsi", piket: "Malam Hari 1", rafting: "Kelompok 3", offroad: "Kelompok 3", mback: "Kelompok 1", kamar: "Kamar 7", gunung: "Kelompok 3" },

    // --- KELOMPOK 8 ---
    { name: "Ghaitsani Qurrotu'ain", divisi: "Ketua Kelompok 7 (Rafting/Offroad)", piket: "-", rafting: "Kelompok 7 (Ketua)", offroad: "Kelompok 7 (Ketua)", mback: "Kelompok 3", kamar: "Kamar 8", gunung: "Kelompok 3" },
    { name: "Siti Aisah", divisi: "Divisi Konsumsi", piket: "Pagi Hari 1", rafting: "Kelompok 2", offroad: "Kelompok 2", mback: "Kelompok 1", kamar: "Kamar 8", gunung: "Kelompok 4" },
    { name: "Amel", divisi: "Anggota / Naik Kawah Ratu", piket: "-", rafting: "Kelompok 4", offroad: "Kelompok 6", mback: "Kelompok 3", kamar: "Kamar 8", gunung: "Kelompok 4" },
    { name: "Unaisah", divisi: "Ketua Kelompok 6 (Rafting/Offroad)", piket: "-", rafting: "Kelompok 6 (Ketua)", offroad: "Kelompok 6 (Ketua)", mback: "Kelompok 3", kamar: "Kamar 8", gunung: "Kelompok 6 (Ketua)" },
    { name: "Salsabila", divisi: "Divisi Konsumsi / Kebersihan", piket: "Anggota Tetap Konsumsi", rafting: "Kelompok 6", offroad: "Kelompok 6", mback: "Kelompok 2", kamar: "Kamar 8", gunung: "Kelompok 6" },
    { name: "Asadel Reka Fauziyah", divisi: "Ketua Acara", piket: "-", rafting: "Kelompok 1", offroad: "Kelompok 1", mback: "Kelompok 1", kamar: "Kamar 8", gunung: "Kelompok 3" },

    // --- SISA ANGGOTA YANG DIALOKASIKAN SESUAI DISTRIBUSI LOGIS TABEL ---
    { name: "Pica", divisi: "Divisi Konsumsi", piket: "Pagi Hari 2", rafting: "Kelompok 4", offroad: "Kelompok 4", mback: "Kelompok 1", kamar: "Kamar 4", gunung: "Kelompok 4" },
    { name: "Nafisha Dzakira", divisi: "Divisi Konsumsi", piket: "Anggota Tetap Konsumsi", rafting: "Kelompok 6", offroad: "Kelompok 6", mback: "Kelompok 2", kamar: "Kamar 6", gunung: "Kelompok 5" },
    { name: "Afika Ramadhani Khubraini", divisi: "Bakar Frozen Food", piket: "-", rafting: "Kelompok 7", offroad: "Kelompok 7", mback: "Kelompok 2", kamar: "Kamar 3", gunung: "Kelompok 3" },
    { name: "Fatimah trpl", divisi: "Divisi Kesehatan", piket: "-", rafting: "Kelompok 2", offroad: "Kelompok 3", mback: "Kelompok 1", kamar: "Kamar 5", gunung: "Kelompok 3" },
    { name: "Amelia Contesa", divisi: "MC / Naik Kawah Ratu", piket: "-", rafting: "Kelompok 3", offroad: "Kelompok 5", mback: "Kelompok 3", kamar: "Kamar 2", gunung: "Kelompok 6" }
];

// EVENT DOM BINDING
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('searchModal');
const closeModal = document.querySelector('.close-modal');

const detailListSection = document.getElementById('detailListSection');
const detailTitle = document.getElementById('detailTitle');
const detailContent = document.getElementById('detailContent');
const closeDetailBtn = document.getElementById('closeDetailBtn');

// EVENT FITUR SEARCH (ENTER)
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim().toLowerCase();
        if (query === "") return;

        const found = memberDatabase.find(m => m.name.toLowerCase().includes(query));

        if (found) {
            document.getElementById('modalName').textContent = found.name;
            document.getElementById('modalDivisi').textContent = found.divisi;
            document.getElementById('modalTugas').textContent = found.piket;
            document.getElementById('modalGunung').textContent = found.gunung;
            document.getElementById('modalKamar').textContent = found.kamar + " (Piket mengikuti Kamar)";
            document.getElementById('modalRafting').textContent = found.rafting;
            document.getElementById('modalOffroad').textContent = found.offroad;
            document.getElementById('modalMback').textContent = found.mback;
            modal.style.display = "flex";
        } else {
            alert("Nama tidak ditemukan! Silakan cek ejaan kembali.");
        }
    }
});

closeModal.addEventListener('click', () => modal.style.display = "none");

// LOGIKA KLIK SECTION UNTUK MENAMPILKAN SEMUA ANGGOTA KELOMPOK
document.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', () => {
        const type = card.getAttribute('data-type');
        let htmlOutput = "";
        
        detailListSection.classList.remove('hidden');
        detailListSection.scrollIntoView({ behavior: 'smooth' });

        // 1. KELOMPOK GUNUNG
        if (type === "gunung") {
            detailTitle.textContent = "DAFTAR KELOMPOK GUNUNG";
            for(let i=1; i<=6; i++) {
                const members = memberDatabase.filter(m => m.gunung.includes(`Kelompok ${i}`));
                htmlOutput += `<div class="group-block"><div class="group-title-label">GUNUNG KELOMPOK ${i}</div>`;
                members.forEach(m => htmlOutput += `<div class="member-name-item">• ${m.name} ${m.gunung.includes('Ketua') ? '<b>(KETUA)</b>' : ''}</div>`);
                htmlOutput += `</div>`;
            }
        }
        // 2. KELOMPOK KAMAR (1-8)
        else if (type === "kamar") {
            detailTitle.textContent = "DAFTAR KELOMPOK KAMAR & PIKET INTERNAL";
            for(let i=1; i<=8; i++) {
                const members = memberDatabase.filter(m => m.kamar === `Kamar ${i}`);
                htmlOutput += `<div class="group-block"><div class="group-title-label">KAMAR ${i} (Piket Bersama)</div>`;
                members.forEach(m => htmlOutput += `<div class="member-name-item">• ${m.name}</div>`);
                htmlOutput += `</div>`;
            }
        }
        // 3. KELOMPOK RAFTING (1-8)
        else if (type === "rafting") {
            detailTitle.textContent = "DAFTAR KELOMPOK RAFTING";
            for(let i=1; i<=8; i++) {
                const members = memberDatabase.filter(m => m.rafting.includes(`Kelompok ${i}`));
                htmlOutput += `<div class="group-block"><div class="group-title-label">RAFTING KELOMPOK ${i}</div>`;
                members.forEach(m => htmlOutput += `<div class="member-name-item">• ${m.name} ${m.rafting.includes('Ketua') ? '<b>(KETUA)</b>' : ''}</div>`);
                htmlOutput += `</div>`;
            }
        } 
        // 4. KELOMPOK OFFROAD (1-7)
        else if (type === "offroad") {
            detailTitle.textContent = "DAFTAR KELOMPOK OFFROAD";
            for(let i=1; i<=7; i++) {
                const members = memberDatabase.filter(m => m.offroad.includes(`Kelompok ${i}`));
                htmlOutput += `<div class="group-block"><div class="group-title-label">OFFROAD KELOMPOK ${i}</div>`;
                members.forEach(m => htmlOutput += `<div class="member-name-item">• ${m.name} ${m.offroad.includes('Ketua') ? '<b>(KETUA)</b>' : ''}</div>`);
                htmlOutput += `</div>`;
            }
        }
        // 5. KELOMPOK MOBIL BAK (MBACK)
        else if (type === "mback") {
            detailTitle.textContent = "DAFTAR KELOMPOK MOBIL BAK (MBACK)";
            for(let i=1; i<=3; i++) {
                const members = memberDatabase.filter(m => m.mback.includes(`Kelompok ${i}`));
                htmlOutput += `<div class="group-block"><div class="group-title-label">MOBIL BAK KELOMPOK ${i}</div>`;
                members.forEach(m => htmlOutput += `<div class="member-name-item">• ${m.name} ${m.mback.includes('Ketua') ? '<b>(KETUA)</b>' : ''}</div>`);
                htmlOutput += `</div>`;
            }
        }
        // 6. PIKET PAGI
        else if (type === "konsumsi-pagi") {
            detailTitle.textContent = "PIKET KONSUMSI PAGI";
            ["Pagi Hari 1", "Pagi Hari 2", "Pagi Hari 3"].forEach(p => {
                const members = memberDatabase.filter(m => m.piket === p);
                htmlOutput += `<div class="group-block"><div class="group-title-label">${p}</div>`;
                members.forEach(m => htmlOutput += `<div class="member-name-item">• ${m.name}</div>`);
                htmlOutput += `</div>`;
            });
        }
        // 7. PIKET SIANG
        else if (type === "konsumsi-siang") {
            detailTitle.textContent = "PIKET KONSUMSI SIANG";
            ["Siang Hari 2", "Siang Hari 2 Kawah Ratu", "Siang Hari 3"].forEach(p => {
                const members = memberDatabase.filter(m => m.piket === p);
                htmlOutput += `<div class="group-block"><div class="group-title-label">${p}</div>`;
                members.forEach(m => htmlOutput += `<div class="member-name-item">• ${m.name}</div>`);
                htmlOutput += `</div>`;
            });
        }
        // 8. PIKET MALAM
        else if (type === "konsumsi-malam") {
            detailTitle.textContent = "PIKET KONSUMSI MALAM";
            const members = memberDatabase.filter(m => m.piket === "Malam Hari 1");
            htmlOutput += `<div class="group-block"><div class="group-title-label">Malam Hari 1</div>`;
            members.forEach(m => htmlOutput += `<div class="member-name-item">• ${m.name}</div>`);
            htmlOutput += `</div>`;
        }
        // 9. TIM FROZEN FOOD
        else if (type === "frozen-food") {
            detailTitle.textContent = "TIM BAKAR FROZEN FOOD";
            const members = memberDatabase.filter(m => m.divisi === "Bakar Frozen Food");
            htmlOutput += `<div class="group-block"><div class="group-title-label">Anggota Bakar Frozen Food</div>`;
            members.forEach(m => htmlOutput += `<div class="member-name-item">• ${m.name}</div>`);
            htmlOutput += `</div>`;
        }
        // 10. PANITIA INTI
        else if (type === "panitia-inti") {
            detailTitle.textContent = "STRUKTUR PANITIA INTI";
            const members = memberDatabase.filter(m => m.divisi.includes("Ketua") || m.divisi.includes("Bendahara") || m.divisi.includes("Sekretaris") || m.divisi.includes("Komdigi"));
            htmlOutput += `<div class="group-block"><div class="group-title-label">Panitia Inti</div>`;
            members.forEach(m => htmlOutput += `<div class="member-name-item"><b>${m.divisi}:</b> ${m.name}</div>`);
            htmlOutput += `</div>`;
        }
        // 11. DIVISI LAIN
        else if (type === "divisi-lain") {
            detailTitle.textContent = "DIVISI PELAKSANA LAPANGAN";
            ["Kebersihan", "Kesehatan", "Timekeeper", "MC"].forEach(div => {
                const members = memberDatabase.filter(m => m.divisi.includes(div));
                htmlOutput += `<div class="group-block"><div class="group-title-label">Divisi ${div}</div>`;
                members.forEach(m => htmlOutput += `<div class="member-name-item">• ${m.name}</div>`);
                htmlOutput += `</div>`;
            });
        }

        detailContent.innerHTML = htmlOutput;
    });
});

closeDetailBtn.addEventListener('click', () => {
    detailListSection.classList.add('hidden');
});