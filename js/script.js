// script.js
$(document).ready(function () {
	const giftBoxCard = $(".gift-box__card");
	$(giftBoxCard).hide();

	$(".gift-box__img").click(function () {
		$(giftBoxCard).fadeToggle(100);
	});
	$(".close-btn").click(function () {
		$(giftBoxCard).fadeToggle(100);
	})

	// Acordion
	const downBoxHide = document.querySelectorAll(".down-box__hide")
	const downBox = document.querySelectorAll(".down-box");
	const upBoxBtn = document.querySelectorAll(".up-box__btn");
	$(downBoxHide).hide();

	$(upBoxBtn).each(function (index, item) {
		$(item).click(function () {
			$(this).toggleClass('active-icon');
			$(downBox).slideToggle('fast');
			$(downBoxHide).slideToggle('fast');
		})
	});


});

