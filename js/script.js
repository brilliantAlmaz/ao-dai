$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('html').toggleClass('lock');
	});
});
const welcomeImageblock = document.querySelector('.welcome__imageblock');


var checkImageblock=true;
var checkWindowblock=false;

const sliderLineExhibition = document.querySelector('.exhibition__slider-line');
const sliderExhibition = document.querySelector('.exhibition__slider');
const sliderItemExhibition = document.querySelectorAll('.exhibition__item');
const exhibitionNextBtn = document.querySelector('.arrow-right')
const exhibitionPrevBtn = document.querySelector('.arrow-left')
window.addEventListener('resize', init);

console.log(checkWindowblock)
var indexActive=-1;
var count=0; var translateWidth=0;
sliderItemExhibition.forEach((i,j) => i.addEventListener('click', function(){
	if (window.screen.width>1000){
		for (let index=0; index<sliderItemExhibition.length; index++){
			sliderItemExhibition[index].classList.remove('active');
		}
		i.classList.add('active');
		indexActive=j;
	}
}));


exhibitionNextBtn.addEventListener('click', function(){
	console.log(count)
	count++;
	if (count==sliderItemExhibition.length){
		count=0;
		translateWidth=0;
	}
	else{
		translateWidth=translateWidth+sliderItemExhibition[count-1].clientWidth+80;
		if (window.screen.width<=1000) {
			translateWidth-=80;
		}
	}
	sliderExhibition.style.transform=`translate( -${translateWidth}px)`;
	console.log(translateWidth)
});
exhibitionPrevBtn.addEventListener('click', function(){
	if (count==0){
		count=4;
		translateWidth=480*4;
		if (indexActive!=-1){
			translateWidth=480*3+580
		}
	}
	else{
		translateWidth=translateWidth-sliderItemExhibition[count-1].clientWidth-80;
		if (window.screen.width<=1000) {
			translateWidth+=80;
		}
		count--;
	}
	sliderExhibition.style.transform=`translate( -${translateWidth}px)`;
});


//explore slider
const exploreSlider = document.querySelector('.explore__slider')
const exploreItemSlider = document.querySelectorAll('.explore__item');
const exploreImageblock = document.querySelectorAll('explore__imageblock');
const exploreNextBtn = document.querySelector('.explore__arrow .arrow-right')
const explorePrevBtn = document.querySelector('.explore__arrow .arrow-left')
const exploreLineItems = document.querySelectorAll('.explore__navigation-item')

let exploreTranslateWidth;



let exploreCount=2;
init();
exploreNextBtn.addEventListener('click', function(){
	if (exploreCount == exploreItemSlider.length-1){
		exploreCount=0;
	}
	else{
		exploreCount++;
	}
	for (let i of exploreLineItems){
		i.classList.remove('active');
	}
	exploreLineItems[exploreCount].classList.add('active');
	exploreSlider.style.transform =`translate(-${exploreCount*exploreTranslateWidth}px)`
})
explorePrevBtn.addEventListener('click', function(){
	if (exploreCount == 0){
		exploreCount=exploreItemSlider.length-1;
	}
	else{
		exploreCount--;
	}
	for (let i of exploreLineItems){
		i.classList.remove('active');
	}
	exploreLineItems[exploreCount].classList.add('active');
	exploreSlider.style.transform =`translate(-${exploreCount*exploreTranslateWidth}px)`
})


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
	if (window.screen.width<=1000) {
		sliderItemExhibition.forEach(i => i.classList.add('active'));
	}
	else{
		sliderItemExhibition.forEach(i => i.classList.remove('active'));
	}
	let exploreWidth=0;
	for (let i of exploreItemSlider){
		exploreWidth=exploreWidth+ +i.clientWidth;
		exploreTranslateWidth = i.clientWidth;
	}
	
	exploreSlider.style.transform =`translate(-${2*exploreTranslateWidth}px)`
	exploreSlider.style.width=`${exploreWidth}px`;
}