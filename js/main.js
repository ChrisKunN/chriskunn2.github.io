$(document).ready(function(){
    //cambio de Header
    $(window).on('scroll', function(){
        let position = $('#fr').offset();
        if ($(window).scrollTop()>= position.top){
            $('header').removeClass('transparent')
        } else {
            $('header').addClass('transparent')
        }
    })
    //accionamiento del menu lateral
    $('#burger').click(function(){
        $('#burger').toggleClass('abierto')
        $('.menu').toggleClass('abierto');
     });
     //smooth scroll
     $('a').on('click', function(){
        if(this.hash !== ''){
            let hash =this.hash;
            $('html, body').animate({
                scrollTop:$(hash).offset().top
            }, 800)
        }
     })
})