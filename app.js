let planet = $('#planete__img img');
let planet__titre = $('#planete__titre h2');
let planet__titre__btn = $('#btn__planete');
let planet__titre__txt = $('#planete__titre p');
let newsletter__titre = $('#newsletter h2');
let newsletter__txt = $('#newsletter__wrapper p');
let newsletter__form = $('#form__newsletter');

let destination1 = $('#destination1');
let destination2 = $('#destination2');
let destination3 = $('#destination3');

$(window).scroll(function(){
    if($(window).scrollTop()>500){
        planet.addClass('fadeIn');
        planet__titre.addClass('typing');
        planet__titre__btn.addClass('fadeInLeft');
        planet__titre__txt.addClass('fadeInLeft');
    }
    if($(window).scrollTop()>1200){
        newsletter__titre.addClass('typing').css('animation-duration', '4s');

        newsletter__txt.addClass('fadeIn');
        newsletter__form.addClass('fadeIn');
    }
})

destination1.hover(function(){
    $('#destination1 h2').animate({visibility : "hidden"}, "slow");
    $('#destination1 .greybackground').animate({visibility : "hidden"}, "slow");
    $('#destination1').css({
        'background-image': "url('images/1.png')",
        'background-position': "center",
        'background-repeat' : "no-repeat",
        'background-size' : 'cover'
    });
}).mouseleave(function(){
    $('#destination1 h2').removeClass('hidden');
    $('#destination1 .greybackground').removeClass('hidden');
    $('#destination1').css('background-image', "none");
});

destination2.hover(function(){
    $('#destination2 h2').addClass('hidden');
    $('#destination2 .greybackground').addClass('hidden');
    $('#destination2').css({
        'background-image': "url('images/2.png')",
        'background-position': "center",
        'background-repeat' : "no-repeat",
        'background-size' : 'cover'
    });
}).mouseleave(function(){
    $('#destination2 h2').removeClass('hidden');
    $('#destination2 .greybackground').removeClass('hidden');
    $('#destination2').css('background-image', "none");
});

destination3.hover(function(){
    $('#destination3 h2').addClass('hidden');
    $('#destination3 .greybackground').addClass('hidden');
    $('#destination3').css({
        'background-image': "url('images/3.jpg')",
        'background-position': "center",
        'background-repeat' : "no-repeat",
        'background-size' : 'cover'
    });
}).mouseleave(function(){
    $('#destination3 h2').removeClass('hidden');
    $('#destination3 .greybackground').removeClass('hidden');
    $('#destination3').css('background-image', "none");
});