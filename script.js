const hm_button  = document.getElementById('hamburger-menu');
const hm_close   = document.getElementById('close-hamburger-menu');
const hm_bar     = document.getElementById('hamburger-menu-bar');

const get_projects = () => Array.from(document.getElementById('projects').children);

hm_button.onclick = function() {
    hm_bar.classList.remove('close-menu');
    hm_bar.classList.add('open-menu');
}

hm_close.onclick = function() {
    hm_bar.classList.remove('open-menu');
    hm_bar.classList.add('close-menu');
}