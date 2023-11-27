//! --- menambahkan sticky ketika di scroll ---
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

//! ----- action pada navbar ketika list navbar di klik ------
//? mengambil elemen navbar dan daftar item menu
const navbar = document.querySelector('nav');
const menuItems = navbar.getElementsByTagName('a');

//? Menambahkan event listener ke setiap item menu
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    //? Menghapus kelas 'active' dari item menu yang sebelumnya aktif
    const activeItem = navbar.querySelector('.active');
    if (activeItem) {
      activeItem.classList.remove('active');
    }

    //? Menambahkan kelas 'active' ke item menu yang diklik
    this.classList.add('active');
  });
}

//! ---- Action navbar ketika website di scroll -----
//? Membuat fungsi untuk memperbarui warna item menu yang aktif
function updateActiveMenuItem() {
//? Mendapatkan posisi scroll saat ini
const scrollPosition = window.scrollY;

//! Loop melalui setiap item menu dan mengecek apakah bagian terkait dalam tampilan
for (let i = 0; i < menuItems.length; i++) {
    const sectionId = menuItems[i].getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);

    if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
    //? Menghapus kelas 'active' dari item menu yang sebelumnya aktif
    const activeItem = navbar.querySelector('.active');
    if (activeItem) {
        activeItem.classList.remove('active');
    }

    //? Menambahkan kelas 'active' ke item menu yang terkait dengan bagian yang sedang ditampilkan
    menuItems[i].classList.add('active');
    }
}
}

//! Menambahkan event listener ke scroll window
window.addEventListener('scroll', updateActiveMenuItem);


//! Action ketika hamburger menu di klik
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('nav ul ');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('active');
});