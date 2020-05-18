require('regenerator-runtime');
require('./plugins/slider.js');
const burger = require ('./plugins/burger.js');

window.addEventListener('DOMContentLoaded', () => {

burger();
})
