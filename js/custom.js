
// $('.button-prev').mouseenter( function () {
//     resetCubePosition();
// });
//
//
//
// function resetCubePosition() {
//     let pages = $('#pages')[0].style.transform;
//
//     console.log(pages);
//     if (pages === 'rotateY(-720deg)') {
//         $('#pages').css({ 'transform' : 'rotateY(10deg)' });
//     }
//     // $('#pages').css({ 'transform' : 'translate' });
//     // alert($('#pages').rotationInfo().deg);
//
//
// }



$('#enter-cube').click( function() {
    zoomedInCube(false)
});

$('#room-navigation li').click( function() {
    zoomedInCube(true)
});

 function  zoomedInCube(zoominonce) {
     if ( zoominonce == false) {
         $('.cube-wrapper').toggleClass('cube-zoomedin');
         $('.enter-cube-container').toggleClass('enter-cube-top');
         $('.world-container').toggleClass('world-active');
         $('.festival-timetable').fadeToggle(200);
         $('.festival-landing-introduction').fadeToggle(200);
         if ( $('#enter-cube').text() === 'Enter me' ){
             $('#enter-cube').text('Close me');
         } else {
             $('#enter-cube').text('Enter me');

         }
     } else if ( zoominonce == true) {
         $('.cube-wrapper').addClass('cube-zoomedin');
         $('.enter-cube-container').addClass('enter-cube-top');
         $('.world-container').addClass('world-active');
         $('.festival-timetable').fadeOut(200);
         $('.festival-landing-introduction').fadeOut(200);

         if ( $('#enter-cube').text() === 'Enter me' ){
             $('#enter-cube').text('Close me');
         }
     }


}




// project item trigger project details

$('.project-item').click( function () {
    var content_id = $(this).attr('id');
    var category = $(this).attr('data-category');
    $('#pages section').animate({
        scrollTop: $('.world-container').offset().top
    }, 200);

    $('.project-details[data-category=' + category + ']').fadeToggle();
    $('.project-detail-item[data-contentid=' + content_id + ']').fadeToggle();
    $('.projects-overview#overview-' + category).fadeToggle();
});

$('.project-back-btn').click( function () {
    var category = $(this).attr('data-category');

    $('.project-details[data-category=' + category + ']').fadeOut();
    $('.project-detail-item[data-category=' + category + ']').fadeOut();
    $('.projects-overview#overview-' + category).fadeIn();

});




$('.button-prev').click( function () {
    var currentli = $('#menu').find( "li.active" );

    currentli.removeClass('active');

    if ( currentli.prev().is('li') ) {
        currentli.prev().addClass('active');
    } else {
        $('#menu li').last().addClass('active');
    }

    var btn = $(this);
    btn.prop('disabled',true);
    window.setTimeout(function(){
        btn.prop('disabled',false);
    },620);
});

$('.button-next').click( function () {
    var currentli = $('#menu').find( "li.active" );
    currentli.removeClass('active');

    if ( currentli.next().is('li') ) {
        currentli.next().addClass('active');
    } else {
        $('#menu li').first().addClass('active');
    }

    var btn = $(this);
    btn.prop('disabled',true);
    window.setTimeout(function(){
        btn.prop('disabled',false);
    },650);
});



$('#menu li').click( function () {
    $('#menu li').removeClass('active');
    $(this).addClass('active');

    var navbtn = $('.navigation-button');
    navbtn.prop('disabled',true);
    window.setTimeout(function(){
        navbtn.prop('disabled',false);
    },800);
});
// while ( !$('#pages').hasClass('veloctiyAnimating') );


//
// $( "body" ).mousemove(function( event ) {
//     var mouseX = event.pageX/5;
//     var isHovered = $('.cube-wrapper').is(":hover"); // returns true or false
//
//     if ( !isHovered) {
//         $( "main#pages" ).css("transform", 'rotateY(' + mouseX + 'deg)');
//     }
//
// });

//
// var today = new Date().getHours();
// if (today >= 3 && today <= 4) {
//    $('#exhibtion-alert').slideToggle();
// } else {
//     // document.body.style.background = "Blue";
// }