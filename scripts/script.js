$(function(){	
	var numDeal = 1; //номер (первого) дела

	function createNewDeal(){
		if ($('.newdeal__name').val().length > 0) {		//Проверяем на наличие заголовка	
			$('#deal-list').append('<div class="deal" id="deal-' + numDeal +'"><h3 class="deal__title">' + $('.newdeal__name').val() + '</h3><button class="deal__close" id="close-btn-' + numDeal + '"><img src="img/clear-button.png"></button><button class="deal__hide" id="hide-btn-' + numDeal + '"><img src="img/arrow-down.png" alt=""></button><div class="deal__description">' + $('.newdeal__description').val() + '</div></div>');
			$('.newdeal__name').val(''); //очищаем поле ввода заголовка дела
			$('.newdeal__description').val(''); // очищаем поле ввода описания дела
			$('#close-btn-' + numDeal).on('click', deleteDeal); //создаем обработчик кнопки close для каждого дела
			$('#hide-btn-' + numDeal).on('click', hideDeal); //создаем обработчик кнопки hide для каждого дела			
			numDeal++; //увеличиваем номер для следющего дела
		}  
		else { //при отсутствии заголовка делаем рамку поля ввода заголовка красной
			$('.newdeal__name').addClass('error');
		}
	};

	function hideRedBorder(){
		$('.newdeal__name').removeClass('error');
	}

	function deleteDeal(){
		console.log('Кнопка ' + $(this).attr('id') + ' нажата');
		$(this).parent().remove(); //удаляем родительский контейнер кнопкм close, (this - это кнопка close, т.к. эту функцию вызвал обработчик этой кнопки)
	};

	function hideDeal(){
		console.log('Кнопка ' + $(this).attr('id') + ' нажата');
		$(this).children('img').toggleClass('arrow-rotate'); //переворачиваем стрелку на кнопке
		$(this).siblings('.deal__description').slideToggle(); //скрываем контейнер с описанием дела
		// $(this).parent().animate({minHeight: "25px"}, 400); // делаем контейнер с делом узким
	};

		
	$('.newdeal__btn').on('click', createNewDeal);
	$('.newdeal__name').keydown(hideRedBorder);

});