(() => {
	const newdealName = document.querySelector('.newdeal-name'),
	dealList = document.querySelector('#deal-list'),
	newdeaelDescription = document.querySelector('.newdeal-description'),
	newdealBtn = document.querySelector('.newdeal-btn');
	

	let numDeal = 1,
	startHeightDealElement = [];
	const hideHeight = '60px';

	const createNewDeal = () => {
		if (newdealName.value.length > 0) {
			if (newdeaelDescription.value.length > 0) {
				dealList.insertAdjacentHTML('beforeend', '<div class="deal bg-white px-4 py-3 mb-4 " id="deal-' + numDeal +'"><div class="mb-3"><h3 class="h4 font-weight-normal d-inline mr-1">' + newdealName.value + '</h3><button class="my-btn text-danger border-0 bg-white" id="close-btn-' + numDeal +'"><i class="fas fa-times"></i></button><button class="my-btn border-0 bg-white float-right" id="hide-btn-' + numDeal + '"><i class="fas fa-chevron-down"></i></button></div><p class="text-muted p-0 mt-3" id="deal-description">' + newdeaelDescription.value + '</p></div>');
				startHeightDealElement[numDeal] = getComputedStyle(document.querySelector(`#deal-${numDeal}`)).height;
				document.querySelector(`#deal-${numDeal}`).style.height = startHeightDealElement[numDeal];
				newdealName.value = '';
				newdeaelDescription.value = '';
				console.log('test1');
				document.querySelector(`#close-btn-${numDeal}`).addEventListener('click', deleteDeal);
				document.querySelector(`#hide-btn-${numDeal}`).addEventListener('click', hideDeal);
				console.log(startHeightDealElement[numDeal]);
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

	function deleteDeal() {
		this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
	}

	function hideDeal() {
		this.firstChild.classList.toggle('fa-chevron-down');
		this.firstChild.classList.toggle('fa-chevron-up');

		console.log(+/\d+/.exec(this.id));
		if(this.parentElement.parentElement.style.height == hideHeight) {
			this.parentElement.parentElement.style.height = startHeightDealElement[+/\d+/.exec(this.id)];
		} else this.parentElement.parentElement.style.height = hideHeight;

		console.log(this.parentElement.parentElement.style.height);
		
	}


	newdealBtn.addEventListener('click', createNewDeal);
	newdealName.addEventListener('keydown', removeClassError);
	newdeaelDescription.addEventListener('keydown', removeClassError);

	console.log(startHeightDealElement);

})();

