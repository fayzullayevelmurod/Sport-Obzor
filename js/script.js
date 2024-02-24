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
	// $('.header-bottom .down-box').hover(function () {
	// 	$(this).addClass('active')
	// 	$('.header__drop-list').addClass('drop-list-nav');
	// }, function () {
	// 	$(this).removeClass('active')
	// 	$('.header__drop-list').removeClass('drop-list-nav');
	// }
	// );

	// $('.header__drop-list').hover(function () {
	// 	$(this).addClass('drop-list-nav');
	// }, function () {
	// 	$(this).removeClass('drop-list-nav');
	// }
	// );

	const downBox = $('.header-bottom .down-box');
	const headerDropList = $('.header__drop-list');

	downBox.hover(
		function () {
			// $(this).addClass('active');
			headerDropList.addClass('drop-list-nav');
		},
		function () {
			// $(this).removeClass('active');
			headerDropList.removeClass('drop-list-nav');
		}
	);

	headerDropList.hover(
		function () {
			// $(downBox).addClass('active');
			$(this).addClass('drop-list-nav');
		},
		function () {
			// $(downBox).removeClass('active');
			$(this).removeClass('drop-list-nav');
		}
	);


	// // Acordion
	// $('.accordion').each(function (acIndex, item) {
	// 	const accordionHeader = item.querySelector('.accordion-header');
	// 	const accordionContent = item.querySelector('.accordion-content__line');
	// 	$(accordionContent).addClass('hide-content');

	// 	$(accordionHeader).each(function (acHeaderIndex, item) {
	// 		if (accordionContent.classList.contains('hide-content')) {
	// 			$(accordionHeader).addClass('active')
	// 		}
	// 		$(item).click(function (e) {
	// 			$(item).toggleClass('active')
	// 			$(accordionContent).slideToggle();
	// 		});
	// 	});
	// });
	$('.accordion').each(function (acIndex, item) {
		const accordionHeader = $(item).find('.accordion-header');
		const accordionContent = $(item).find('.accordion-content__line');

		accordionContent.addClass('hide-content');

		accordionHeader.click(function (e) {
			const currentHeader = $(this);
			const currentContent = currentHeader.siblings('.accordion-content__line');

			if (currentHeader.hasClass('active')) {
				currentHeader.removeClass('active');
				currentContent.slideUp().addClass('hide-content');
			} else {
				$('.accordion-header').removeClass('active');
				$('.accordion-content__line').slideUp().addClass('hide-content');

				currentHeader.addClass('active');
				currentContent.slideDown().removeClass('hide-content');
			}
		});
	});

	// select
	$('.select').each(function () {
		const _this = $(this),
			selectOption = _this.find('option').not(':disabled'),
			duration = 240;

		_this.hide().wrap('<div class="select"></div>');
		$('<div>', {
			class: 'new-select',
			text: _this.children('option:disabled').text()
		}).insertAfter(_this);

		const selectHead = _this.next('.new-select');
		$('<div>', { class: 'new-select__list' }).insertAfter(selectHead);

		const selectList = selectHead.next('.new-select__list');
		selectOption.each(function () {
			$('<div>', {
				class: 'new-select__item',
				'data-value': $(this).val(),
				html: $('<span>', { text: $(this).text() })
			}).appendTo(selectList);
		});

		const selectItem = selectList.find('.new-select__item');
		// selectList.slideUp(0);

		selectHead.on('click', function () {
			const isOpen = $(this).hasClass('on');
			$(this).toggleClass('on', !isOpen);
			selectList.toggleClass('on');

			if (isOpen) return;

			selectItem.on('click', function () {
				const chooseItem = $(this).data('value');
				_this.val(chooseItem).attr('selected', 'selected');
				selectHead.text($(this).find('span').text());
				selectList.removeClass('on');
				selectHead.removeClass('on');
			});
		});
	});

});
