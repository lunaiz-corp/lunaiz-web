import './assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

var themeToggleDarkIcon1 = document.getElementById('theme-toggle-dark-icon-1');
var themeToggleLightIcon1 = document.getElementById('theme-toggle-light-icon-1');
var themeToggleDarkIcon2 = document.getElementById('theme-toggle-dark-icon-2');
var themeToggleLightIcon2 = document.getElementById('theme-toggle-light-icon-2');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon1.classList.remove('hidden');
    themeToggleLightIcon2.classList.remove('hidden');
} else {
    themeToggleDarkIcon1.classList.remove('hidden');
    themeToggleDarkIcon2.classList.remove('hidden');
}

var themeToggleBtn1 = document.getElementById('theme-toggle-1');

themeToggleBtn1.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon1.classList.toggle('hidden');
    themeToggleLightIcon1.classList.toggle('hidden');
    themeToggleDarkIcon2.classList.toggle('hidden');
    themeToggleLightIcon2.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});


var themeToggleBtn2 = document.getElementById('theme-toggle-2');

themeToggleBtn2.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon1.classList.toggle('hidden');
    themeToggleLightIcon1.classList.toggle('hidden');
    themeToggleDarkIcon2.classList.toggle('hidden');
    themeToggleLightIcon2.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});
