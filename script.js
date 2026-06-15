const memberDatabase = [
    // KAMAR 1
    { name: "Selvi", divisi: "Ketua Kelompok", piket: "-", rafting: "Kelompok 1 (Ketua)", offroad: "Kelompok 1 (Ketua)", mback: "Kelompok 4", kamar: "Kamar 1", gunung: "Kelompok 3" },
    { name: "Najla", divisi: "MC", piket: "-", rafting: "Kelompok 1", offroad: "Kelompok 6", mback: "Kelompok 1", kamar: "Kamar 1", gunung: "Kelompok 4" },
    { name: "Fathimah", divisi: "Bakar Frozen Food", piket: "-", rafting: "Kelompok 1", offroad: "Kelompok 5", mback: "Kelompok 2", kamar: "Kamar 1", gunung: "-" },
    { name: "Dila", divisi: "Wakil Acara", piket: "Siang Hari 2", rafting: "Kelompok 1", offroad: "Kelompok 7", mback: "Kelompok 4", kamar: "Kamar 1", gunung: "Kelompok 4" },
    { name: "Ami", divisi: "Tenda", piket: "-", rafting: "Kelompok 1", offroad: "Kelompok 6", mback: "Kelompok 2", kamar: "Kamar 1", gunung: "-" },

    // KAMAR 2
    { name: "Alifah", divisi: "Komdigi / Ketua Kelompok", piket: "-", rafting: "Kelompok 2 (Ketua)", offroad: "Kelompok 4 (Ketua)", mback: "Kelompok 4", kamar: "Kamar 2", gunung: "-" },
    { name: "Nabila", divisi: "Kendaraan / Photo Before After", piket: "-", rafting: "Kelompok 2", offroad: "Kelompok 1", mback: "Kelompok 1", kamar: "Kamar 2", gunung: "Kelompok 1" },
    { name: "Salwa", divisi: "Divisi Konsumsi", piket: "Pagi Hari 1", rafting: "Kelompok 2", offroad: "Kelompok 2", mback: "Kelompok 1", kamar: "Kamar 2", gunung: "-" },
    { name: "Rizka", divisi: "Sekertaris / Photo Before After", piket: "-", rafting: "Kelompok 2", offroad: "Kelompok 2", mback: "Kelompok 2", kamar: "Kamar 2", gunung: "Kelompok 4" },
    { name: "Jahi", divisi: "Bakar Frozen Food", piket: "-", rafting: "Kelompok 2", offroad: "Kelompok 1", mback: "Kelompok 2", kamar: "Kamar 2", gunung: "Kelompok 1" },

    // KAMAR 3
    { name: "Nakes", divisi: "Ketua Kelompok", piket: "-", rafting: "Kelompok 3 (Ketua)", offroad: "Kelompok 2 (Ketua)", mback: "Kelompok 1", kamar: "Kamar 3", gunung: "-" },
    { name: "Nadi", divisi: "Divisi Konsumsi", piket: "Siang Hari 3", rafting: "Kelompok 3", offroad: "Kelompok 1", mback: "Kelompok 3", kamar: "Kamar 3", gunung: "-" },
    { name: "Shofi", divisi: "Divisi Konsumsi", piket: "Pagi Hari 3", rafting: "Kelompok 3", offroad: "Kelompok 2", mback: "Kelompok 2", kamar: "Kamar 3", gunung: "-" },
    { name: "Ayu Aisyah", divisi: "Bakar Frozen Food", piket: "-", rafting: "Kelompok 3", offroad: "Kelompok 3", mback: "Kelompok 1", kamar: "Kamar 3", gunung: "Kelompok 5" },
    { name: "Afika", divisi: "Bakar Frozen Food", piket: "-", rafting: "Kelompok 3", offroad: "Kelompok 1", mback: "Kelompok 3", kamar: "Kamar 3", gunung: "-" },

    // KAMAR 4
    { name: "Windy", divisi: "Ketua Kelompok", piket: "-", rafting: "Kelompok 4 (Ketua)", offroad: "Kelompok 3", mback: "Kelompok 2", kamar: "Kamar 4", gunung: "Kelompok 4" },
    { name: "Aca", divisi: "Divisi Konsumsi", piket: "Siang Hari 3", rafting: "Kelompok 4", offroad: "Kelompok 2", mback: "Kelompok 1", kamar: "Kamar 4", gunung: "-" },
    { name: "Naimah", divisi: "Tenda", piket: "-", rafting: "Kelompok 4", offroad: "Kelompok 7", mback: "Kelompok 2", kamar: "Kamar 4", gunung: "Kelompok 2" },
    { name: "Zaro", divisi: "Acara", piket: "-", rafting: "Kelompok 4", offroad: "Kelompok 3", mback: "Kelompok 1", kamar: "Kamar 4", gunung: "-" },
    { name: "Arin", divisi: "Divisi Konsumsi", piket: "Malam Hari 1", rafting: "Kelompok 4", offroad: "Kelompok 1", mback: "Kelompok 1", kamar: "Kamar 4", gunung: "Kelompok 6" },

    // KAMAR 5
    { name: "Anggun", divisi: "Ketua Kelompok", piket: "-", rafting: "Kelompok 5 (Ketua)", offroad: "Kelompok 7 (Ketua)", mback: "Kelompok 3", kamar: "Kamar 5", gunung: "Kelompok 3" },
    { name: "Kanya", divisi: "Bakar Frozen Food", piket: "-", rafting: "Kelompok 5", offroad: "Kelompok 3", mback: "Kelompok 3", kamar: "Kamar 5", gunung: "Kelompok 1 (Ketua)" },
    { name: "Diaz", divisi: "Komdigi", piket: "-", rafting: "Kelompok 5", offroad: "Kelompok 4", mback: "Kelompok 1", kamar: "Kamar 5", gunung: "-" },
    { name: "Naisya Asya", divisi: "Kebersihan", piket: "-", rafting: "Kelompok 5", offroad: "Kelompok 4", mback: "Kelompok 2", kamar: "Kamar 5", gunung: "Kelompok 6" },
    { name: "Ratu", divisi: "Divisi Konsumsi", piket: "Malam Hari 1", rafting: "Kelompok 5", offroad: "Kelompok 6", mback: "Kelompok 4", kamar: "Kamar 5", gunung: "Kelompok 2" },

    // KAMAR 6
    { name: "Unes", divisi: "Ketua Kelompok", piket: "-", rafting: "Kelompok 6 (Ketua)", offroad: "Kelompok 5 (Ketua)", mback: "Kelompok 4", kamar: "Kamar 6", gunung: "Kelompok 6" },
    { name: "Nafisah Aldawiyah", divisi: "Kebersihan", piket: "-", rafting: "Kelompok 6", offroad: "Kelompok 7", mback: "Kelompok 3", kamar: "Kamar 6", gunung: "Kelompok 1" },
    { name: "Amalia", divisi: "Kebersihan", piket: "-", rafting: "Kelompok 6", offroad: "Kelompok 2", mback: "Kelompok 2", kamar: "Kamar 6", gunung: "Kelompok 3" },
    { name: "Futem", divisi: "Kesehatan", piket: "-", rafting: "Kelompok 6", offroad: "Kelompok 3", mback: "Kelompok 1", kamar: "Kamar 6", gunung: "-" },
    { name: "Naya", divisi: "Acara", piket: "-", rafting: "Kelompok 6", offroad: "Kelompok 4", mback: "Kelompok 2", kamar: "Kamar 6", gunung: "Kelompok 5" },

    // KAMAR 7
    { name: "Ghaitsani", divisi: "Ketua Kelompok", piket: "-", rafting: "Kelompok 7 (Ketua)", offroad: "Kelompok 6 (Ketua)", mback: "Kelompok 4", kamar: "Kamar 7", gunung: "Kelompok 2" },
    { name: "Amel C", divisi: "MC", piket: "-", rafting: "Kelompok 7", offroad: "Kelompok 5", mback: "Kelompok 4", kamar: "Kamar 7", gunung: "Kelompok 6" },
    { name: "Ipeh", divisi: "Tenda", piket: "-", rafting: "Kelompok 7", offroad: "Kelompok 7", mback: "Kelompok 3", kamar: "Kamar 7", gunung: "-" },
    { name: "Marha Nabiila", divisi: "Kesehatan", piket: "-", rafting: "Kelompok 7", offroad: "Kelompok 2", mback: "Kelompok 3", kamar: "Kamar 7", gunung: "Kelompok 3" },
    { name: "Fayyaza", divisi: "Divisi Konsumsi", piket: "Siang Hari 2", rafting: "Kelompok 7", offroad: "Kelompok 3", mback: "Kelompok 3", kamar: "Kamar 7", gunung: "Kelompok 4" },

    // KAMAR 8
    { name: "Risha", divisi: "Ketua Kelompok", piket: "-", rafting: "Kelompok 8 (Ketua)", offroad: "Kelompok 6 (Ketua)", mback: "Kelompok 1", kamar: "Kamar 8", gunung: "Kelompok 5" },
    { name: "Alika", divisi: "Kebersihan", piket: "-", rafting: "Kelompok 8", offroad: "Kelompok 4", mback: "Kelompok 2", kamar: "Kamar 8", gunung: "-" },
    { name: "Nafisah Dzakira / Pica", divisi: "Divisi Konsumsi", piket: "Pagi Hari 2", rafting: "Kelompok 8", offroad: "Kelompok 7", mback: "Kelompok 4", kamar: "Kamar 8", gunung: "Kelompok 5" },
    { name: "Sausan", divisi: "Timekeeper", piket: "-", rafting: "Kelompok 8", offroad: "Kelompok 5", mback: "Kelompok 4", kamar: "Kamar 8", gunung: "Kelompok 3" },
    { name: "Nadila", divisi: "Divisi Konsumsi", piket: "Pagi Hari 2", rafting: "Kelompok 8", offroad: "Kelompok 6", mback: "Kelompok 4", kamar: "Kamar 8", gunung: "Kelompok 2" },
    { name: "Putri", divisi: "Bendahara", piket: "-", rafting: "Kelompok 1", offroad: "Kelompok 5", mback: "Kelompok 1", kamar: "Kamar 8", gunung: "-" },

    // KAMAR 9
    { name: "Asadel", divisi: "Ketua Acara", piket: "Malam Hari 2", rafting: "Kelompok 2", offroad: "Kelompok 4", mback: "Kelompok 3", kamar: "Kamar 9", gunung: "-" },
    { name: "Naurah", divisi: "Divisi Konsumsi", piket: "Pagi Hari 3", rafting: "Kelompok 3", offroad: "Kelompok 3", mback: "Kelompok 3", kamar: "Kamar 9", gunung: "Kelompok 2" },
    { name: "Siti Aisyah", divisi: "Divisi Konsumsi", piket: "Pagi Hari 1", rafting: "Kelompok 4", offroad: "Kelompok 6", mback: "Kelompok 4", kamar: "Kamar 9", gunung: "Kelompok 6" },
    { name: "Yulia", divisi: "Timekeeper", piket: "-", rafting: "Kelompok 5", offroad: "Kelompok 5", mback: "Kelompok 3", kamar: "Kamar 9", gunung: "-" },
    { name: "Salma", divisi: "Bakar Frozen Food", piket: "-", rafting: "Kelompok 6", offroad: "Kelompok 1", mback: "Kelompok 2", kamar: "Kamar 9", gunung: "Kelompok 1" },
    { name: "Salsa", divisi: "Divisi Konsumsi", piket: "Malam Hari 2", rafting: "Kelompok 7", offroad: "Kelompok 4", mback: "Kelompok 3", kamar: "Kamar 9", gunung: "Kelompok 6" },
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

// LOGIKA KLIK SECTION
document.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', () => {
        const type = card.getAttribute('data-type');

        // KELOMPOK -> redirect ke halaman masing-masing
        const pageMap = { gunung: "kelompok-gunung.html", kamar: "kelompok-kamar.html", rafting: "kelompok-rafting.html", offroad: "kelompok-offroad.html", mback: "kelompok-mback.html" };
        if (pageMap[type]) {
            window.location.href = pageMap[type];
            return;
        }

        let htmlOutput = "";
        
        detailListSection.classList.remove('hidden');
        detailListSection.scrollIntoView({ behavior: 'smooth' });

        // 1. PIKET PAGI
        if (type === "konsumsi-pagi") {
            detailTitle.textContent = "PIKET KONSUMSI PAGI";
            ["Pagi Hari 1", "Pagi Hari 2", "Pagi Hari 3"].forEach(p => {
                const members = memberDatabase.filter(m => m.piket === p);
                htmlOutput += `<div class="group-block"><div class="group-title-label">${p}</div>`;
                members.forEach(m => htmlOutput += `<div class="member-name-item">• ${m.name}</div>`);
                htmlOutput += `</div>`;
            });
        }
        // 2. PIKET SIANG
        else if (type === "konsumsi-siang") {
            detailTitle.textContent = "PIKET KONSUMSI SIANG";
            ["Siang Hari 2", "Siang Hari 2 Kawah Ratu", "Siang Hari 3"].forEach(p => {
                const members = memberDatabase.filter(m => m.piket === p);
                htmlOutput += `<div class="group-block"><div class="group-title-label">${p}</div>`;
                members.forEach(m => htmlOutput += `<div class="member-name-item">• ${m.name}</div>`);
                htmlOutput += `</div>`;
            });
        }
        // 3. PIKET MALAM
        else if (type === "konsumsi-malam") {
            detailTitle.textContent = "PIKET KONSUMSI MALAM";
            const members = memberDatabase.filter(m => m.piket === "Malam Hari 1");
            htmlOutput += `<div class="group-block"><div class="group-title-label">Malam Hari 1</div>`;
            members.forEach(m => htmlOutput += `<div class="member-name-item">• ${m.name}</div>`);
            htmlOutput += `</div>`;
        }
        // 4. TIM FROZEN FOOD
        else if (type === "frozen-food") {
            detailTitle.textContent = "TIM BAKAR FROZEN FOOD";
            const members = memberDatabase.filter(m => m.divisi === "Bakar Frozen Food");
            htmlOutput += `<div class="group-block"><div class="group-title-label">Anggota Bakar Frozen Food</div>`;
            members.forEach(m => htmlOutput += `<div class="member-name-item">• ${m.name}</div>`);
            htmlOutput += `</div>`;
        }
        // 5. PANITIA INTI
        else if (type === "panitia-inti") {
            detailTitle.textContent = "STRUKTUR PANITIA INTI";
            const members = memberDatabase.filter(m => m.divisi.includes("Ketua") || m.divisi.includes("Bendahara") || m.divisi.includes("Sekretaris") || m.divisi.includes("Komdigi"));
            htmlOutput += `<div class="group-block"><div class="group-title-label">Panitia Inti</div>`;
            members.forEach(m => htmlOutput += `<div class="member-name-item"><b>${m.divisi}:</b> ${m.name}</div>`);
            htmlOutput += `</div>`;
        }
        // 6. DIVISI LAIN
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