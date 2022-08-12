//fade
$('.manu-nav_link').on('click',function(e){
    e.preventDefault();
    var sectionID = '#' + $(this).data('section');
    $('#cont section:visible').fadeOut();
    $(sectionID).fadeIn(); 
}); 

//active  section
$('.manu-nav_link').click(function(e) {
    e.preventDefault();
    $('.manu-nav_link').removeClass('active');
    $(this).addClass('active');
})