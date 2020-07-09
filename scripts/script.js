var newDealBtn = document.querySelector('.newdeal__btn');
var newDealInput = document.querySelector('.newdeal__input');
var dealList = document.querySelector('.deal-list');
var numberDeal = 0;

function createNewDeal() {
	if (newDealInput.value.length > 0 ) {
		var curentDeal = document.createElement('li');
		curentDeal.classList.add('deal-item');
		curentDeal.setAttribute('id', 'deal-' + numberDeal);
		curentDeal.innerHTML = newDealInput.value;
		dealList.append(curentDeal);
		numberDeal++;
		newDealInput.value = '';
	} else {
		newDealInput.classList.add('error');
	}	
}


newDealBtn.addEventListener('click', createNewDeal);

newDealInput.addEventListener('keydown', function(){
	newDealInput.classList.remove('error');
});

dealList.addEventListener('mousedown', function(ev){
	ev.target.classList.toggle('finished');
});
