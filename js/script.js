$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('html').toggleClass('lock');
	});
});
const welcomeImageblock = document.querySelector('.welcome__imageblock');

window.addEventListener('resize', init);
var checkImageblock=true;
init();
function init(){
	if (window.screen.width < 601 && checkImageblock){
		welcomeImageblock.previousElementSibling.querySelector('.btn').insertAdjacentHTML(
			'beforebegin',
			`<div class="welcome__imageblock">
			<img src="img/welcome/01.png" alt="">
			<img src="img/welcome/02.png" alt="">
			</div>`
			);
		checkImageblock = false;
		welcomeImageblock.style.display='none';
	}
}

const sliderLineExhibition = document.querySelector('.exhibition__slider-line');
const sliderExhibition = document.querySelector('.exhibition__slider');
const sliderItemExhibition = document.querySelectorAll('.exhibition__item');
console.log(sliderItemExhibition);
sliderItemExhibition.forEach(i => i.addEventListener('click', function(){
	for (let index=0; index<sliderItemExhibition.length; index++){
		sliderItemExhibition[index].classList.remove('active');
	}
	i.classList.add('active');

}));
