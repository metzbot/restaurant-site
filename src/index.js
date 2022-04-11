import { pageMain } from './pageMain.js';
import { pageContact } from './pageContact.js';
import { pageMenu } from './pageMenu.js';

import './styles.css';

pageMain(); // init page render

let contactBtn = document.getElementById('contactBtn');
let menuBtn = document.getElementById('menuBtn');
let orderBtn = document.getElementById('orderBtn');

contactBtn.addEventListener('click', pageContact);
menuBtn.addEventListener('click', pageMenu);