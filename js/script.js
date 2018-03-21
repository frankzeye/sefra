jQuery.fn.verticalAlign = function ()
{
    return this
        .css("margin-top",($(this).parent()
                .height() - $(this).height())/2 + 'px' )
};
$(document).ready(function(){
    $('#right-body .headline').verticalAlign();
    $('.logo-background').verticalAlign();
    $('.logo img').verticalAlign();
});