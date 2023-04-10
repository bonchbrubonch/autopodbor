$(function(){

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50){
    $('header').addClass("sticky");
    }
    else{
    $('header').removeClass("sticky");
    }
  });

	$(".header__menu-link").click(function(e){
		e.preventDefault();
		var anchor = $(this).attr("href");
		$("html, body").animate({
		 scrollTop: $(anchor).offset().top - 120
		}, 400);
	 });



  $(".menu__btn").on("click", function () {
    $(".menu__btn").toggleClass("menu__btn--active");
    $(".header__menu-list").toggleClass("active");
  });

  $(".header__menu-link").on("click", function () {
    $(".menu__btn").removeClass("menu__btn--active");
    $(".header__menu-list").removeClass("active");
  });

  $(".header__menu-link").click(function () {
    $(".header__menu-link").removeClass("active");
    $(this).addClass("active");
  });

  $('.slider-about').slick({
    nextArrow: '<button class="slider__arrows slider__right" src="images/src/content/modernArrow-left"><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M45 22.5C45 10.0927 34.9073 -4.41168e-07 22.5 -9.83506e-07C10.0927 -1.52584e-06 3.37353e-06 10.0927 2.83119e-06 22.5C2.28885e-06 34.9073 10.0945 45 22.5 45C34.9055 45 45 34.9073 45 22.5ZM3.48566 22.5C3.48566 12.0168 12.0151 3.48565 22.5 3.48565C32.9849 3.48565 41.5143 12.0168 41.5143 22.5C41.5143 32.9849 32.9849 41.5144 22.5 41.5143C12.0151 41.5143 3.48566 32.9832 3.48566 22.5Z" fill="#EE152F"/><path d="M20.0949 32.4516L28.809 23.7374C29.4853 23.0577 29.4853 21.9597 28.809 21.28L20.0949 12.5658C19.4431 12.0064 18.4793 12.0064 17.8275 12.5658C17.0972 13.1915 17.0118 14.2929 17.6375 15.0232L25.1142 22.5L17.6374 29.9942C16.9612 30.6739 16.9612 31.7718 17.6374 32.4516C18.3172 33.1278 19.4152 33.1278 20.0949 32.4516Z" fill="#EE152F"/></g><defs><clipPath id="clip0"><rect width="45" height="45" fill="transparent" transform="translate(45) rotate(90)"/></clipPath></defs></svg></button>',
    prevArrow: '<button class="slider__arrows slider__left" src="images/src/content/modernArrow-right"><svg width="45" height="45" viewBox="0 0 45 45" fill="transparent" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M2.83119e-06 22.5C3.37353e-06 34.9073 10.0927 45 22.5 45C34.9073 45 45 34.9073 45 22.5C45 10.0927 34.9055 -5.34046e-06 22.5 -4.7982e-06C10.0945 -4.25594e-06 2.28885e-06 10.0927 2.83119e-06 22.5ZM41.5143 22.5C41.5143 32.9832 32.9849 41.5143 22.5 41.5143C12.0151 41.5143 3.48566 32.9832 3.48566 22.5C3.48566 12.0151 12.0151 3.48565 22.5 3.48565C32.9849 3.48565 41.5143 12.0168 41.5143 22.5Z" fill="#EE152F"/><path d="M24.9051 12.5484L16.1909 21.2626C15.5147 21.9423 15.5147 23.0403 16.1909 23.72L24.9051 32.4342C25.5569 32.9936 26.5207 32.9936 27.1725 32.4342C27.9028 31.8085 27.9882 30.7071 27.3625 29.9768L19.8858 22.5L27.3625 15.0058C28.0388 14.3261 28.0388 13.2282 27.3625 12.5484C26.6828 11.8722 25.5848 11.8722 24.9051 12.5484Z" fill="#EE152F"/></g><defs><clipPath id="clip0"><rect width="45" height="45" fill="transparent" transform="translate(3.8147e-06 45) rotate(-90)"/></clipPath></defs></svg></svg></button>',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    arrows: true,
    dots: true,
  });

  $('.slider-service, .slider-reviews').slick({
    nextArrow: '<button class="slider__arrows slider__right" src="images/src/content/modernArrow-left"><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M45 22.5C45 10.0927 34.9073 -4.41168e-07 22.5 -9.83506e-07C10.0927 -1.52584e-06 3.37353e-06 10.0927 2.83119e-06 22.5C2.28885e-06 34.9073 10.0945 45 22.5 45C34.9055 45 45 34.9073 45 22.5ZM3.48566 22.5C3.48566 12.0168 12.0151 3.48565 22.5 3.48565C32.9849 3.48565 41.5143 12.0168 41.5143 22.5C41.5143 32.9849 32.9849 41.5144 22.5 41.5143C12.0151 41.5143 3.48566 32.9832 3.48566 22.5Z" fill="#EE152F"/><path d="M20.0949 32.4516L28.809 23.7374C29.4853 23.0577 29.4853 21.9597 28.809 21.28L20.0949 12.5658C19.4431 12.0064 18.4793 12.0064 17.8275 12.5658C17.0972 13.1915 17.0118 14.2929 17.6375 15.0232L25.1142 22.5L17.6374 29.9942C16.9612 30.6739 16.9612 31.7718 17.6374 32.4516C18.3172 33.1278 19.4152 33.1278 20.0949 32.4516Z" fill="#EE152F"/></g><defs><clipPath id="clip0"><rect width="45" height="45" fill="transparent" transform="translate(45) rotate(90)"/></clipPath></defs></svg></button>',
    prevArrow: '<button class="slider__arrows slider__left" src="images/src/content/modernArrow-right"><svg width="45" height="45" viewBox="0 0 45 45" fill="transparent" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M2.83119e-06 22.5C3.37353e-06 34.9073 10.0927 45 22.5 45C34.9073 45 45 34.9073 45 22.5C45 10.0927 34.9055 -5.34046e-06 22.5 -4.7982e-06C10.0945 -4.25594e-06 2.28885e-06 10.0927 2.83119e-06 22.5ZM41.5143 22.5C41.5143 32.9832 32.9849 41.5143 22.5 41.5143C12.0151 41.5143 3.48566 32.9832 3.48566 22.5C3.48566 12.0151 12.0151 3.48565 22.5 3.48565C32.9849 3.48565 41.5143 12.0168 41.5143 22.5Z" fill="#EE152F"/><path d="M24.9051 12.5484L16.1909 21.2626C15.5147 21.9423 15.5147 23.0403 16.1909 23.72L24.9051 32.4342C25.5569 32.9936 26.5207 32.9936 27.1725 32.4342C27.9028 31.8085 27.9882 30.7071 27.3625 29.9768L19.8858 22.5L27.3625 15.0058C28.0388 14.3261 28.0388 13.2282 27.3625 12.5484C26.6828 11.8722 25.5848 11.8722 24.9051 12.5484Z" fill="#EE152F"/></g><defs><clipPath id="clip0"><rect width="45" height="45" fill="transparent" transform="translate(3.8147e-06 45) rotate(-90)"/></clipPath></defs></svg></svg></button>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  });

  	//устанавливаем маску телефона
	$(".formPhone").inputmask({"mask": "+7 (999) 999-99-99"});

	//имя поля
  var fieldTitle = new Map([
		['formPhone', 'Телефон: '],
		['formName', 'Имя: '],
		
    
		['pageURL', 'Адрес страницы: '],
		['pageTitle', 'Заголовок страницы: '],
		['pageRef', 'Откуда пришли: '],
		['UTMsource', 'Источник трафика: '],
		['UTMmedium', 'Тип трафика: '],
		['UTMcampaign', 'Рекламная кампания: '],
		['UTMterm', 'Ключевое слово: '],
		['UTMcontent', 'Содержание: '],
		['clientPlace', 'Расположение клиента: '],
		['formDate', 'Дата и время отправки: '],
		['result-test', 'Результаты тестирования: '],
		['formTitle', 'Форма: ']
	]);  
	
	//парсим utm метки
	function getParameterByName(name) {
		var name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
		var results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
	
	//ставим utm метки
	$("form").each(function(){
		var form 		= $(this),
			formTitle	= form.attr("data-subject"),
			pageURL 	= location.href,
			pageTitle	= document.title,
			pageRef 	= document.referrer,
			UTMsource 	= getParameterByName('utm_source'),
			UTMmedium 	= getParameterByName('utm_medium'),
			UTMcampaign = getParameterByName('utm_campaign'),
			UTMterm 	= getParameterByName('utm_term'),
			UTMcontent 	= getParameterByName('utm_content'),
			pageUTM 	= "";
		
		var clientDetailsHTML 	= '<div style="display:none"><input type="text" class="formTitle" value="'+formTitle+'">';
		clientDetailsHTML		+= '<input type="text" class="pageURL" value="'+pageURL+'">';
		clientDetailsHTML 		+= '<input type="text" class="pageTitle" value="'+pageTitle+'">';
		clientDetailsHTML 		+= '<input type="text" class="pageRef" value="'+pageRef+'">';
	
		if (UTMsource != '') 	clientDetailsHTML += '<input type="text" class="UTMsource" value="'+UTMsource+'">';
		if (UTMmedium != '') 	clientDetailsHTML += '<input type="text" class="UTMmedium" value="'+UTMmedium+'">';
		if (UTMcampaign != '') 	clientDetailsHTML += '<input type="text" class="UTMcampaign" value="'+UTMcampaign+'">';
		if (UTMterm != '') 		clientDetailsHTML += '<input type="text" class="UTMterm" value="'+UTMterm+'">';
		if (UTMcontent != '') 	clientDetailsHTML += '<input type="text" class="UTMcontent" value="'+UTMcontent+'">';
		
		// var client_place = "";
		// if (YMaps.location.country != undefined) {
		// 	client_place += YMaps.location.country;
		// }
		// if (YMaps.location.region != undefined) {
		// 	client_place += ", "+YMaps.location.region;
		// }
		// if (YMaps.location.city != undefined) {
		// 	client_place += ", "+YMaps.location.city;
		// }
		// if (client_place != '') {
		// 	clientDetailsHTML += '<input type="text" class="clientPlace" value="'+client_place+'">';
		// }
	
		var client_date = new Date();
			client_date = client_date.toLocaleString();
		
		clientDetailsHTML += '<input type="text" class="formDate" value="'+client_date+'"></div>';		
		
		form.append(clientDetailsHTML);
	});
	
	//отправка формы
	$("form").submit(function(e){
		e.preventDefault();
		
			var form				= $(this),
//				counterID			= 69551389,
				formGoal			= form.attr("data-goal"),
				fieldCount			= form.find("input,textarea").filter(function () {return this.value.length > 0}).length,
				fieldCountVisible	= form.find("input:not([type='hidden']),textarea").filter(function () {return (this.value.length > 0)}).length,
				msg					= "",
				subject				= form.attr("data-subject"),
				fieldPhone			= "";

			var error = true;

			if (form.find(".formPhone").length > 0) {
				if (form.find(".formPhone").val().replace(/\D/g,'').length > 10) {
					error = false;
					$(".formErrorPhone").remove();
				} else {
					if (form.find(".formErrorPhone").length == 0) {
						var errorMsg = $(".form__error-phone").text();
						$("<p class='formError formErrorPhone'>"+errorMsg+"</p>").insertAfter(form.find(".formPhone"));
					}
					error = true;
				}
			}

      // if (form.find(".formName").length > 0) {
			// 	if (form.find(".formName").val().length > 2) {
			// 		error = false;
			// 	} else {
			// 		if (form.find(".formErrorName").length == 0) {
			// 			var errorMsg = $(".form__error-name").text();
			// 			$("<p class='formError formErrorName'>"+errorMsg+"</p>").insertAfter(form.find(".formName"));
			// 		}
			// 		error = true;
			// 	}
			// }

			if (!error) {

				form.find("button").addClass("disabled");
				form.find("input,textarea").filter(function () {return this.value.length > 0}).each(function(index){
					var field 			= $(this),
						fieldType		= field.attr("type"),
						fieldName 		= field.attr("class").substr(field.attr("class").lastIndexOf(' ')+1),
						fieldIsLast 	= index == fieldCountVisible-1,
						fieldVal		= field.val();
						if (fieldVal != "") {
							var currentFieldTitle = fieldTitle.get(fieldName);
								msg += "<strong>"+currentFieldTitle+"</strong> "+fieldVal;
								msg += "<br>";
								field.val("");
						}
				});

				var data = {
					msg: msg,
					subject: subject
				};

				jQuery.post( "form.php", data, function(response) {
					if (response) {
						// form.hide();
						// $(".modal-send").show();
						jQuery.fancybox.open(jQuery('#modal-send'));
						setTimeout(function(){
							$.fancybox.close('');
						 }, 5000);
					}
				});
			}
			
	});


});
