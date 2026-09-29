// ===== Pengaturan (ubah sesuai kebutuhan) =====
const TANGGAL_JADIAN = new Date(2024, 6, 1); // 1 Juli 2024 (bulan mulai dari 0: Januari = 0)

// ===== Hati melayang =====
function hearts(n) {
  const emojis = ['❤', '💖', '💕', '🌸'];
  for (let i = 0; i < n; i++) {
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.fontSize = (14 + Math.random() * 26) + 'px';
    h.style.animationDuration = (4 + Math.random() * 5) + 's';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 9500);
  }
}
setInterval(() => hearts(1), 700);

// ===== Buka amplop =====
document.getElementById('env').addEventListener('click', () => {
  document.getElementById('front').style.display = 'none';
  document.getElementById('letter').style.display = 'block';
  hearts(25);
});

// ===== Penghitung hari jadian =====
function hitungLama() {
  const s = TANGGAL_JADIAN;
  const n = new Date();
  let y = n.getFullYear() - s.getFullYear();
  let m = n.getMonth() - s.getMonth();
  let d = n.getDate() - s.getDate();

  if (d < 0) {
    m--;
    d += new Date(n.getFullYear(), n.getMonth(), 0).getDate();
  }
  if (m < 0) {
    y--;
    m += 12;
  }

  const totalHari = Math.floor((n - s) / 864e5);
  document.getElementById('lama').textContent = `${y} tahun, ${m} bulan, ${d} hari 💕`;
  document.getElementById('total').textContent =
    `(${totalHari.toLocaleString('id-ID')} hari penuh cinta)`;
}
hitungLama();

// ===== Tombol balasan =====
document.querySelectorAll('[data-reply]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('hug').classList.add('on');
    document.getElementById('res').textContent = btn.dataset.reply;
    hearts(30);
  });
});
