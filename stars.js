var siteWidth = $(window).width();
var siteHeight = $(window).height();

for (i = 0; i <= 100; i++) {
    var star = $('<div>')
        .addClass('star star_'+i)
        .css({
            top: Math.floor(Math.random()*siteHeight),
            left: Math.floor(Math.random()*siteWidth)
        })
        .appendTo('.stars');
}