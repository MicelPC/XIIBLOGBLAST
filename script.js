function showPage(pageId, element) {
  // Sembunyikan semua halaman
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  // Tampilkan halaman sesuai ID
  document.getElementById(pageId).classList.add('active');

  // Update navigasi aktif
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  element.classList.add('active');

  // Scroll ke atas
  window.scrollTo(0, 0);
}
