// console.log('JS OK'); // Verifica JS
// console.log('JQuery', $) // Verifica JQuery

$(document).ready(function(){

// Refs

var prevBtn = $('.prev');

var nextBtn = $('.next');

// Navigare tra le slide con il mouse

// Next

nextBtn.click(function(){
    // alert('avanti');

    nextPrevSlide('avanti');

});



// Prev

prevBtn.click(function(){
    // alert('indietro');
    nextPrevSlide('indietro');


});
















// End doc Ready
})





/****************************
 *  UTILITIES / FUNCTIONS
 ********************************/


// Naviga tra le slide 


/**
 * @param {*} direction // Direzione slide avanti o indietro
 */
function nextPrevSlide(direction){
    console.log(direction);

    // Ref Img e Circle

    var activeImg = $('.images img.active');

    var imgFirst = $('.images img.first');

    var imgLast = $('.images img.last');

    var activeCircle = $('.nav i.active');

    var circleFirst = $('.nav i.first');

    var circleLast = $('.nav i.last')

    // Reset 

    activeImg.removeClass('active');

    activeCircle.removeClass('active');




    // Next
    if(direction === 'avanti'){

        if(activeImg.hasClass('last')){
            imgFirst.addClass('active');
            circleFirst.addClass('active');
        } else {
            activeImg.next('img').addClass('active');
            activeCircle.next('i').addClass('active');
        }

    // Prev   
    } else if( direction === 'indietro'){
        if(activeImg.hasClass('first')){
            imgLast.addClass('active');
            circleLast.addClass('active');
        } else {
            activeImg.prev('img').addClass('active');
            activeCircle.prev('i').addClass('active');
        }
    }

}