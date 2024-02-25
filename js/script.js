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

	// search
	$('.search-btn').click(function () {
		$('.search-form').toggleClass('active')
	})

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

	// datepicker
	$.datepicker.regional['cs'] = {
		closeText: 'Zavřít',
		prevText: '&#x3c;Dříve',
		nextText: 'Později&#x3e;',
		currentText: 'Сейчас',
		monthNames: ['январь', 'февраль', 'Маршировать', 'апрель', 'Может', 'Июнь', 'Июль', 'Август',
			'Сентябрь', 'Октябрь', 'ноябрь', 'Декабрь'
		],
		monthNamesShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
		dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
		dayNamesShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
		dayNamesMin: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
		weekHeader: 'Нед',
		dateFormat: 'dd MM yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};

	$('#datepicker').datepicker({
		// duration: '',
		// changeMonth: false,
		// changeYear: false,
		// yearRange: '2010:2020',
		// showTime: true,
		// time24h: true
	});
	// =========
	$('.time-select').on('change click', function (e) {
		$('.time-select__box').toggleClass('active');
	});


	$.datepicker.setDefaults($.datepicker.regional['cs']);

	$('.accordion').each(function (acIndex, item) {
		const accordionHeader = $(item).find('.accordion-header');
		const accordionContent = $(item).find('.accordion-content__line');

		accordionContent.slideUp(0);

		accordionHeader.click(function (e) {
			const currentHeader = $(this);
			const currentContent = currentHeader.siblings('.accordion-content__line');

			currentHeader.toggleClass('active');
			currentContent.slideToggle(350)
			// if (currentHeader.hasClass('active')) {
			// } else {
			// 	$('.accordion-header').removeClass('active');
			// 	$('.accordion-content__line').slideUp()

			// 	currentHeader.addClass('active');
			// 	currentContent.slideDown()
			// }
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