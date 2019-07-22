$(document).ready(function() {

function openNav() {
    $('#mySidebar').css({'width': '230px', 'box-shadow': '1px 0px 5px #dddddd'});
    $('.content-container').css({ 'opacity': '0.2', 'z-index': '-1' });

};

function closeNav() {
    $('#mySidebar').css('width', '0');
    $('.content-container').css({'opacity': '1', 'z-index': '0' });
};


$('#nav-menu').click(function() {
    openNav();
})

$('.closebtn').click(function() {
    closeNav();
})

$('.sidebar').click(function() {
    closeNav();
})

});

