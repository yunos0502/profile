/**
 * Created by yunos on 15. 9. 23..
 */

var colorBox = function(pDesc, pTitle) {
    $('.poEach a').bind('mouseenter focusin', function() {
        var plist = $(this).parent('li').index();
        for(var i = 0; i < pDesc.length; i++) {
            if(i === plist) {
                $(this).append("<div class='selected'><p><span>" + pDesc[i] + "</span><br>" + pTitle[i] + "</p></div>");
            }
        }
    }).bind('mouseleave focusout', function() {
        $(this).children('.selected').remove();
    });
};