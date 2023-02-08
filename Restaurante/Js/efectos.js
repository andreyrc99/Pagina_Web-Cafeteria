$(document).ready(function(){
    //Efecto menu
    $('.menu a').each(function(index,elemento){
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            'top':'0'
        },2000 +(index*500))
    });
    //Efecto Header
    if( $(window).width()>800){
        $('header .texto').css({
            opacity:0,
            marginTop: 0
        });

        $('header .texto').animate({
            opacity:1,
            marginTop: '-52px'
        },1500);
        
    }
    //Scrol elementos Menu
    var acercaDe =$('#acerca-de').offset().top;
        menu=$('#platillos').offset().top,
        galeria=$('#galeria').offset().top,
        ubicacion=$('#ubicacion').offset().top;
        
    $('#Btn-acerca-de').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: acercaDe-100
        },500)
    });

    $('#Btn-menu').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: menu-100
        },500)
    });
    $('#Btn-galeria').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: galeria-100
        },500)
    });
    $('#Btn-ubicacion').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: ubicacion-100
        },500)
    });
});