// script.js
$(document).ready(function () {
	// swiper
	try {
		var swiper = new Swiper(".media-swiper", {
			slidesPerView: 2,
			spaceBetween: 19,
			navigation: {
				nextEl: ".button-next",
				prevEl: ".button-prev",
			},
			breakpoints: {
				480: {
					slidesPerView: 2,
					spaceBetween: 19,
				},
				0: {
					slidesPerView: 1,
					spaceBetween: 19,
				},
			}
		})

		var swiper = new Swiper(".forecasts-swiper", {
			slidesPerView: 2,
			spaceBetween: 19,
			navigation: {
				nextEl: ".button-next1",
				prevEl: ".button-prev1",
			},
			breakpoints: {
				480: {
					slidesPerView: 2,
					spaceBetween: 19,
				},
				0: {
					slidesPerView: 1,
					spaceBetween: 19,
				},
			}
		})
	} catch (error) {
		throw error
	}


	$('.gift-box__card').slideUp(0);

	$(".gift-box__img").click(function () {
		$('.gift-box__card').slideToggle(350)
	});
	$(".close-btn").click(function () {
		$('.gift-box__card').slideToggle()
	})

	$(document).click(function (event) {
		let target = $(event.target);
		let t = true;
		let t2 = true;

		$(target).each(function (idx, item) {
			if (item.classList.contains('gift-box__img')) {
				t = false
			}
			if (item.classList.contains('search-btn')) {
				t2 = false
			}
		})
		if (!target.closest('.gift-box__card').length && t) {
			$('.gift-box__card').slideUp(350);
		}

		if (!target.closest('.search-form').length && t2) {
			$('.search-form').slideUp(350);
		}
	});



	// search
	$('.search-form').slideUp(0);
	$('.search-btn').each(function (idx, el) {
		$(el).click(function () {
			$($('.search-form')[idx]).slideToggle(350);
			$('.search-form').not($('.search-form')[idx]).slideUp(350);
		})
	})

	const downBox = $('.header-bottom .down-box');
	const headerDropList = $('.header__drop-list');

	downBox.hover(
		function () {
			headerDropList.addClass('drop-list-nav');
		},
		function () {
			headerDropList.removeClass('drop-list-nav');
		}
	);

	headerDropList.hover(
		function () {
			$(this).addClass('drop-list-nav');
		},
		function () {
			$(this).removeClass('drop-list-nav');
		}
	);

	// datepicker
	try {
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

		$('#datepicker').datepicker();
	} catch (error) {
		throw error
	}

	$('.time-select').on('change click', function (e) {
		$('.time-select__box').toggleClass('active');
	});
	$.datepicker.setDefaults($.datepicker.regional['cs']);

	// accordion
	function truncateText() {
		$('.accordion-title').each(function () {
			var $title = $(this);
			var text = $title.text();

			if ($(window).width() <= 480 && text.length > 24) {
				$title.text(text.substring(0, 25) + '...');
			} else {
				$title.text(text);
			}
		});
		$('.group-name a p').each(function () {
			let $title = $(this);
			let text = $title.text();

			if ($(window).width() <= 375 && text.length > 14) {
				$title.text(text.substring(0, 14) + '...');
			} else {
				$title.text(text);
			}
		})
	}

	truncateText();

	$(window).resize(function () {
		truncateText();
	});

	const starIconsTwo = $('.star-icon__two');

	starIconsTwo.each(function (idx, el) {
		$(el).click(function () {
			$(this).toggleClass('active');
		});
	});


	$('.accordion').each(function (acIndex, item) {
		const accordionHeader = $(item).find('.accordion-header');
		const accordionContent = $(item).find('.accordion-content__line');
		const icon = $(item).find('.accordion-title__box svg');

		$(item).find('.star-icon').click(function () {
			$(this).toggleClass('active');
			checkStarIcon(item);
		});

		accordionContent.slideUp(0);
		accordionHeader.click(function (e) {
			if (!$(e.target).is('.accordion-title__box svg, .star-icon') && !$(e.target).is('.accordion-title__box svg path, .star-icon')) {
				const currentHeader = $(this);
				const currentContent = currentHeader.siblings('.accordion-content__line');
				currentHeader.toggleClass('active');
				currentContent.slideToggle(350);
			}
		});

		icon.click(function () {
			$(this).toggleClass('active');
			const isIconActive = $(this).hasClass('active');
			$(item).find('.star-icon').toggleClass('active', isIconActive);
		});
	});

	function checkStarIcon(item) {
		const starIcons = $(item).find('.star-icon');
		const isAnyIconActive = starIcons.hasClass('active');
		const icon = $(item).find('.accordion-title__box svg');
		icon.toggleClass('active', isAnyIconActive);
	}


	function checkStarIcon(element) {
		let t = true
		$(element).find('.star-icon').each(function (idx, el) {
			if (!$(el).hasClass('active')) {
				t = false
			}
		})
		if (t) {
			$(element).find('.accordion-title__box svg').addClass('active');
		} else {
			$(element).find('.accordion-title__box svg').removeClass('active');
		}
	}

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
		$(document).click(function (event) {
			let target = $(event.target);
			let t3 = true;

			$(target).each(function (idx, item) {
				if (item.classList.contains('new-select')) {
					t3 = false
				}
			})
			if (!target.closest('.new-select__list').length && t3) {
				selectList.removeClass('on');
				selectHead.removeClass('on');
			}
		});
	});

	// header bottome menu
	$('.bars-btn').click(function () {
		$(this).toggleClass('active');
		$('body').toggleClass('hidden');
		$('.header-midle').toggleClass('active');
		$('.header-bottom').toggleClass('active');
	})

	// read more 
	$('.read-more__btn').click(function () {
		var $this = $(this);
		if ($this.text() === 'Загрузить еще') {
			$this.text('Секрет');
		} else {
			$this.text('Загрузить еще');
		}
		$('.media-files__boxes .read-more').toggleClass('media-hidden');
	});

	// tab
	const $tabContent = $('.tab-content');
	const $tabHeader = $('.player-table__header');
	const $tabHeaderItems = $('.tab-header__item');

	function hideTabs() {
		$tabContent.addClass('hide').removeClass('show');
		$tabHeaderItems.removeClass('active');
	}

	function showTabs(i = 0) {
		$tabContent.eq(i).removeClass('hide').addClass('show');
		$tabHeaderItems.eq(i).addClass('active');
	}

	hideTabs();
	showTabs();

	$tabHeader.on('click', '.tab-header__item', function () {
		const idx = $tabHeaderItems.index(this);
		hideTabs();
		showTabs(idx);
	});

});