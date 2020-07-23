import itemsTemplate from '../templates/gallery-items.hbs';
import recepies from '../templates/menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const markup = itemsTemplate(recepies);
const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);



const themeChange = (addTheme, subTheme) => {
    document.body.classList.add(addTheme);
    document.body.classList.remove(subTheme);
}

const switchTheme = document.querySelector('.js-switch-input');


// console.log('switchTheme: ', switchTheme.checked);
switchTheme.addEventListener('change', () => {
    if (switchTheme.checked) {
        themeChange(Theme.DARK, Theme.LIGHT)
        localStorage.setItem('theme', 'dark');
    } else {
        themeChange(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('theme', 'light');
    }
})

console.log('theme:', localStorage.getItem('theme'));
if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') == 'dark') {
        switchTheme.checked = true;
        themeChange(Theme.DARK, Theme.LIGHT);
    }
    else {
        switchTheme.checked = false;
        themeChange(Theme.LIGHT, Theme.DARK);
    }
}