$(function() {
	

  
window.onload = function() {

 ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map ("map", {
            center: [44.491428,34.154064],
            zoom: 16
        });

        myPlacemark = new ymaps.Placemark([44.491428,34.154064], { content: 'Инфинити', balloonContent: 'Инфинити' },{
iconImageHref: 'images/contact/metka.png',
iconImageSize: [100, 35],
iconImageOffset: [-18, -35]

}
		);
		 myMap.geoObjects.add(myPlacemark);
		 /* myMap.behaviors.enable('scrollZoom'); */
    }
 
 


$('#serviceUl > li').on('click',function(){
abtitle1 =  $(this).attr("id"),
abtitle1 = $("#list_"+abtitle1);
tlPaje = new TimelineLite();
tlPaje
.to(abtitle1,0,{className: "+=vis"})
.set('.close',{opacity:'0'})
.set('.paje',{y:-650})
.to(abtitle1,0.7,{y:0})
.to('.close',0.1,{opacity:'1'});
return false;
}); 

$('.close').on('click',function(){
tlClose = new TimelineLite();
tlClose
.to('.close',0.1,{opacity:'0'})
.to('.paje',0.7,{y:'-650',delay:0.1})
.to('.paje',0,{className: "-=vis"});
}); 


$('#projectGal > li').on('click',function(){
abtitle1 =  $(this).attr("id"),
abtitle1 = $("#list_"+abtitle1);
$('#projectGal > li').css("color","rgb(68, 68, 68)");
$(this).css("color","rgb(0, 197, 167)");
tlFB = new TimelineLite();
tlFB
.to('.visF',0.7,{x:800,className:"-=visF",opacity:'0'})
.to(abtitle1,0,{className:"+=visF"})
.set(abtitle1,{opacity:'0',x:-800})
.to(abtitle1,0.7,{opacity:'1',x:0})

}); 

$(function() {
 $(window).scroll(function() {
 if($(this).scrollTop() != 0) {
 $('#toTop').fadeIn();
 $('#header').addClass('headerMove');
 $('.nav').addClass('navMove');
 $('#logo').addClass('logoMove');
 } else {
 $('#toTop').fadeOut();
 $('#header').removeClass('headerMove');
 $('.nav').removeClass('navMove');
 $('#logo').removeClass('logoMove');
 }
 });
$('#toTop').click(function() {
 $('body,html').animate({scrollTop:0},1000);
 });
 });


;}	//end windowLoad


/* #serviceUl */


			
});
