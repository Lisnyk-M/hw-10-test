import itemsTemplate from '../templates/gallery-items.hbs';
import recepies from '../templates/menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const refs = {
    galleryRef: document.querySelector('.js-menu'),
    switchTheme: document.querySelector('.js-switch-input')
}

const markup = itemsTemplate(recepies);
refs.galleryRef.insertAdjacentHTML('beforeend', markup);

const themeChange = (addTheme, subTheme) => {
    document.body.classList.add(addTheme);
    document.body.classList.remove(subTheme);
}

// console.log('refs.switchTheme: ', refs.switchTheme.checked);
refs.switchTheme.addEventListener('change', () => {
    if (refs.switchTheme.checked) {
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
        refs.switchTheme.checked = true;
        themeChange(Theme.DARK, Theme.LIGHT);
    }
    else {
        refs.switchTheme.checked = false;
        themeChange(Theme.LIGHT, Theme.DARK);
    }
}