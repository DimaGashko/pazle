window.t = 1500
window.p = 1 

var i = setInterval(()=>{
	var bt = $('.balloon__content__btn__play__icon')[0];
	if(window.p && bt) {$(bt).trigger('click'); console.log('click')}
}, window.t || 2000);