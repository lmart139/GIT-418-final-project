// I am using strict mode a part of the assignment requirment
"use strict";

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   // dots[slideIndex-1].className += " active";
// }

$( function() {
  // accordion
  $( "#accordion" ).accordion();
  // console.log($("#accordion"));

  // slideshow
  $('.slideshow-container').slick();
 
});

// My atempt at adding the sneaker API to show in the browser did not quite work
$(function(){
let popularSneakers = $("#popSneakers");
let imgUrl = "https://images.stockx.com/images/adidas-Forum-Exhibit-Low-Off-White-Shadow-Navy-Product.jpg";
let urlStart = `the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com`;
let apiKey = "e5df004bf9msh7d76783d074b404p15277ajsn5dbd452015f3"

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com/product/01c1af38-d1d0-462c-aca3-13349dc893a9',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e5df004bf9msh7d76783d074b404p15277ajsn5dbd452015f3',
		'X-RapidAPI-Host': 'the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
});


  
   