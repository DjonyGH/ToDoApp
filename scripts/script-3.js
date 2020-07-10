(() => {
	const newdealName = document.querySelector('.newdeal-name'),
	dealList = document.querySelector('#deal-list'),
	newdeaelDescription = document.querySelector('.newdeal-description'),
	newdealBtn = document.querySelector('.newdeal-btn');

	let numDeal = 1;

	const createNewDeal = () => {
		console.log(newdealName.value.length)
		if (newdealName.value.length > 0) {
			if (newdeaelDescription.value.length > 0) {
				dealList.insertAdjacentHTML('beforeend', '<div class="bg-white px-4 py-3 mb-4" id="deal-' + numDeal +'"><div class="mb-3"><h3 class="h4 font-weight-normal d-inline mr-1">' + newdealName.value + '</h3><button class="my-btn text-danger border-0 bg-white" id="close-btn-' + numDeal +'"><i class="fas fa-times"></i></button><button class="my-btn border-0 bg-white float-right" id="hide-btn-' + numDeal + '"><i class="fas fa-chevron-down"></i></button></div><p class="text-muted p-0 mt-3" id="deal-description">' + newdeaelDescription.value + '</p></div>');
				// dealList.append(`<div class="bg-white px-4 py-3 mb-4" id="deal-${numDeal}"><div class="mb-3"><h3 class="h4 font-weight-normal d-inline mr-1">${newdealName.value}</h3><button class="my-btn text-danger border-0 bg-white" id="close-btn-${numDeal}"><i class="fas fa-times"></i></button><button class="my-btn border-0 bg-white float-right" id="hide-btn-${numDeal}"><i class="fas fa-chevron-down"></i></button></div><p class="text-muted p-0 mt-3" id="deal-description">${newdeaelDescription.value}</p></div>`);
				newdealName.value = '';
				newdeaelDescription.value = '';
				console.log('test1');
				document.querySelector(`#close-btn-${numDeal}`).addEventListener('click', deleteDeal);
				document.querySelector(`#hide-btn-${numDeal}`).addEventListener('click', hideDeal);
				numDeal++;
			}
			else newdeaelDescription.classList.add('error');
		}
		else{
			if (newdeaelDescription.value.length > 0) {
				newdealName.classList.add('error');
			}
			else {
				newdeaelDescription.classList.add('error');
				newdealName.classList.add('error');
			}
		}
	}

	function removeClassError() {
		this.classList.remove('error');
	}

	const deleteDeal = () => {

	}

	const hideDeal = () => {
		
	}

	console.log(newdealName);
	console.log(newdealBtn);
	newdealBtn.addEventListener('click', createNewDeal);
	newdealName.addEventListener('keydown', removeClassError);
	newdeaelDescription.addEventListener('keydown', removeClassError);

})();


// $(function(){	
// 	var numDeal = 1; //номер (первого) дела

// 	function createNewDeal(){
// 		if ($('.newdeal-name').val().length > 0) {		//Проверяем на наличие заголовка	
// 			if ($('.newdeal-description').val().length > 0) {		//Проверяем на наличие описания	
// 				$('#deal-list').append('<div class="bg-white px-4 py-3 mb-4" id="deal-' + numDeal +'"><div class="mb-3"><h3 class="h4 font-weight-normal d-inline mr-1">' + $('.newdeal-name').val() + '</h3><button class="my-btn text-danger border-0 bg-white" id="close-btn-' + numDeal +'"><i class="fas fa-times"></i></button><button class="my-btn border-0 bg-white float-right" id="hide-btn-' + numDeal + '"><i class="fas fa-chevron-down"></i></button></div><p class="text-muted p-0 mt-3" id="deal-description">' + $('.newdeal-description').val() + '</p></div>');
// 				$('.newdeal-name').val(''); //очищаем поле ввода заголовка дела
// 				$('.newdeal-description').val(''); // очищаем поле ввода описания дела
// 				$('#close-btn-' + numDeal).on('click', deleteDeal); //создаем обработчик кнопки close для каждого дела
// 				$('#hide-btn-' + numDeal).on('click', hideDeal); //создаем обработчик кнопки hide для каждого дела			
// 				numDeal++; //увеличиваем номер для следющего дела
// 			}
// 			else { //при отсутствии описания делаем рамку поля ввода заголовка красной
// 				$('.newdeal-description').addClass('error');
// 			}
// 		}  
// 		else { //при отсутствии заголовка делаем рамку поля ввода заголовка красной
// 			if ($('.newdeal-description').val().length > 0) {		//Проверяем на наличие описания	
// 				$('.newdeal-name').addClass('error');
// 			}
// 			else { //при отсутствии описания делаем рамку поля ввода заголовка красной
// 				$('.newdeal-description').addClass('error');
// 				$('.newdeal-name').addClass('error');
// 			}
// 		}
// 	};

// 	function hideRedBorder(){
// 		$(this).removeClass('error');
// 	}

// 	function deleteDeal(){
// 		console.log('Кнопка ' + $(this).attr('id') + ' нажата');
// 		$(this).parent().parent().remove(); //удаляем родительский контейнер кнопкм close, (this - это кнопка close, т.к. эту функцию вызвал обработчик этой кнопки)
// 	};

// 	function hideDeal(){
// 		console.log('Кнопка ' + $(this).attr('id') + ' нажата');
// 		$(this).children('i').toggleClass('fa-chevron-down fa-chevron-up'); //переворачиваем стрелку на кнопке
// 		$(this).parent().siblings('#deal-description').slideToggle(); //скрываем контейнер с описанием дела
// 	};

		
// 	$('.newdeal-btn').on('click', createNewDeal);
// 	$('.newdeal-name').keydown(hideRedBorder);
// 	$('.newdeal-description').keydown(hideRedBorder);

// });