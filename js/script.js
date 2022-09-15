window.addEventListener('resize', (e) => {
    if (document.documentElement.clientWidth > 600) document.getElementById('mobileMenu').classList.remove('active')
}, true);

function openMenu() {
    document.getElementById('mobileMenu').classList.toggle('active')
}