var siteWidth = $(window).width();
var siteHeight = $(window).height();

for (i = 0; i <= 50; i++) {
    var star = $('<div>')
        .addClass('star star1 star1_'+i)
        .css({
            top: Math.floor(Math.random()*siteHeight),
            left: Math.floor(Math.random()*siteWidth)
        })
        .appendTo('.stars');
}

for (i = 0; i <= 50; i++) {
    var star = $('<div>')
        .addClass('star star2 star2_'+i)
        .css({
            top: Math.floor(Math.random()*siteHeight),
            left: Math.floor(Math.random()*siteWidth)
        })
        .appendTo('.stars');
}

for (i = 0; i <= 50; i++) {
    var star = $('<div>')
        .addClass('star star3 star3_'+i)
        .css({
            top: Math.floor(Math.random()*siteHeight),
            left: Math.floor(Math.random()*siteWidth)
        })
        .appendTo('.stars');
}

for (i = 0; i <= 50; i++) {
    var star = $('<div>')
        .addClass('star star4 star4_'+i)
        .css({
            top: Math.floor(Math.random()*siteHeight),
            left: Math.floor(Math.random()*siteWidth)
        })
        .appendTo('.stars');
}