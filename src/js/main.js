require('regenerator-runtime');
require('./plugins/slider.js');
const burger = require ('./plugins/burger.js');
const video = require ('./plugins/video.js');

window.addEventListener('DOMContentLoaded', () => {

burger();
video();
})
