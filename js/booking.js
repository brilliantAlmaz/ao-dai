$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('html').toggleClass('lock');
	});
});

//total
let total=0;
const formPerson = $('select')
const formVisitors = $('.visitors');
const totalCostHTML=$('.total')
console.log(formVisitors[0].value);
const form = $('.booking__form form');
form[0].addEventListener('click', function(){
	switch(formPerson[1].value){
		case 'tourist':
		total = 50000;
		break;
		default:
		total= 30000;
		break;
	}
	total*=formVisitors[0].value;
	console.log(total)
	totalCostHTML.html(total);
})
//console.log(formPerson.value)