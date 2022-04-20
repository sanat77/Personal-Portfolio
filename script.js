// import Typed from 'typed.js';

$(document).ready(function() {
    $('.menu-btn').click(function() {
        console.log('clicked');
        $('.navbar .menu').toggleClass("active");
    });
});

$(document).ready(function() {
    $('.menu').click(function() {
        console.log('shut');
        $('.navbar .menu').removeClass("active");
    });
});

// // typing animation
// var typed = new Typed(".typing", {
//     strings: ["abc", "def", "ijk"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// });