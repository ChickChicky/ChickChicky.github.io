const hm_button = document.getElementById('hamburger-menu');
const hm_bar    = document.getElementById('hamburger-menu-bar');

const get_projects = () => Array.from(document.getElementById('projects').children);

let hm_open = false;

hm_button.onclick = function() {
    if (hm_open) {
        hm_bar.classList.add('close-menu');
        hm_bar.classList.remove('open-menu');
    } else {
        hm_bar.classList.remove('close-menu');
        hm_bar.classList.add('open-menu');
    }
    hm_open = !hm_open;
}