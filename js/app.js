// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();

/* Author: Sumit Paul */
jQuery(document).ready(function(e) {
    var w = e(window).width(),
        h = e(window).height(),
        img = e(".mainImage");

    e(window).resize(function() {
        w = e(window).width();
        h = e(window).height();
        img.css("width", w);
        img.css("height", h);
    }).resize();

  $(".mainImage").backstretch("images/me.jpg");
});
