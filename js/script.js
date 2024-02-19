// script.js
$(document).ready(function () {
	const giftBoxCard = $(".gift-box__card");

	$(".gift-box__img").click(function () {
		$(giftBoxCard).toggleClass('open');
	});
	$(".close-btn").click(function () {
		$(giftBoxCard).toggleClass('open');
	})

	// header menu
	$('.header-bottom .down-box').hover(function () {
		$('.header__drop-list').addClass('drop-list-nav');
	}, function () {
		$('.header__drop-list').removeClass('drop-list-nav');
	}
	);

	$('.header__drop-list').hover(function () {
		$(this).addClass('drop-list-nav');
	}, function () {
		$(this).removeClass('drop-list-nav');
	}
	);

	// // Acordion
	const downBoxHide = document.querySelectorAll(".down-box__hide")
	const downBox = document.querySelectorAll(".down-box");
	const upBoxBtn = document.querySelectorAll(".up-box__btn");
	const accordion = document.querySelectorAll('.accordion');
	$(downBoxHide).hide();

	// const accordions = $('.acordion');
	// console.log(accordions);
	// accordions.each(function () {
	// 	const downBoxHide = $(this).find('.down-box__hide');
	// 	const downBox = $(this).find('.down-box');
	// 	const upBoxBtn = $(this).find('.up-box__btn');
	// 	// Hide all down boxes initially
	// 	downBoxHide.hide();

	// 	// Click event for each button in the accordion
	// 	upBoxBtn.click(function () {
	// 		// Toggle the 'active-icon' class
	// 		$(this).toggleClass('active-icon');

	// 		// Toggle visibility of the corresponding down box with animation
	// 		downBox.show('fast');

	// 		// Hide other down boxes and remove 'active-icon' class
	// 		accordions.not($(this).closest('.accordion')).find('.down-box__hide, .down-box').slideUp('fast');
	// 		upBoxBtn.not(this).removeClass('active-icon');
	// 	});
	// });


	// if (item === index) {
	// 	$(item).click(function () {
	// 		$(this).toggleClass('active-icon');
	// 		$(downBox).slideToggle('fast');
	// 		$(downBoxHide).slideToggle('fast');
	// 	})
	// }
});
