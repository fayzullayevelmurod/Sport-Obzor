// script.js
$(document).ready(function () {
	const giftBoxCard = $(".gift-box__card");
	giftBoxCard.slideUp(0);

	$(".gift-box__img").click(function () {
		// giftBoxCard.toggle("slide");
		giftBoxCard.slideToggle(300);
	});
	$(".close-btn").click(function () {
		giftBoxCard.slideUp(300);
	})
});

